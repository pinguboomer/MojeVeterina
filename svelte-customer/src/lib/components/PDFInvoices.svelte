<script>
    import {Button} from "flowbite-svelte";
    import {jsPDF} from "jspdf";
    import autoTable from 'jspdf-autotable'
    import {onMount} from "svelte";
    import {font} from "$lib/charset/Amiri-Regular-normal.js";
    import {formatDate} from "$lib/formatDate.js"
    import {env} from "$env/dynamic/public";


    export let invoice;
    export let client;

    onMount(() => {
        generateInvoice(false);
    })


    function get_items() {
        let items = [];
        for (let item of invoice.items) {
            let i = [item.name, String(item.quantity), String(item.price + ' Kč'), String((item.quantity * item.price) + ' Kč')];
            items.push(i)
        }
        return items;
    }

    const getFullPrice = function (items) {
        let fullPrice = 0;
        for (let item of items) {
            let price = item[3].split(' ')
            fullPrice = fullPrice + parseInt(price[0]);
        }
        return String(fullPrice + ' Kč');
    }

    let pdfURL;

    function generateInvoice(download) {

        URL.revokeObjectURL(pdfURL);
        const doc = new jsPDF();

        doc.setLineHeightFactor(0.5)
        doc.setFontSize(12);
        //doc.addFileToVFS('src/lib/charset/Amiri-Regular.ttf', "custom")
        doc.addFileToVFS("Amiri-Regular.ttf", font);
        doc.addFont('Amiri-Regular.ttf', 'custom', "normal");
        doc.setFont('custom');

        const logo = new Image();
        logo.src = '/src/lib/images/logo_veterina.png';
        doc.addImage(logo, 'PNG', 70, 5, 30, 30);

        doc.setFontSize(25);
        doc.text('Moje Veterina', 10, 14);

        doc.setFontSize(12);

        doc.text('Mírov 5, Praha 10 ', 10, 20);
        // doc.text('Telefonní číslo: +420 752 488 589', 10, 25)
        doc.text('IČO: 12345678', 10, 30);
        doc.text('DIČ: CZ12345678', 10, 35);

        doc.setFontSize(10);
        doc.text('Plátce:', 105, 10);
        doc.setFontSize(12);
        doc.text(client.name + ' ' + client.surname, 105, 15);
        if (client.address) {
            doc.text(client.address, 105, 20);
        }
        if (client.zip_code && client.city) {
            doc.text(client.zip_code + ' ' + client.city, 105, 25);
        }
        if (client.phone) {
            doc.text('Telefonní číslo: ' + client.phone, 105, 30);
        }
        if (client.email) {
            doc.text('E-mail: ' + client.email, 105, 35);
        }


        doc.text('Datum vytvoření: ' + formatDate(new Date(invoice.creationDate)) , 10, 49);
        doc.text('Datum splatnosti: ' + formatDate(new Date(invoice.dueDate)), 10, 54);

        doc.text(String('Číslo faktury: ' + invoice.number), 105, 49)
        // doc.text(String('Číslo platby:' + invoice.transactionPublicId), 102, 50)

        doc.line(100, 3, 100, 60);
        doc.line(5, 60, 200, 60);
        doc.line(5, 3, 5, 60);
        doc.line(5, 3, 200, 3);
        doc.line(200, 3, 200, 60);
        doc.line(5, 40, 200, 40);

        autoTable(doc, {
            headStyles: {fillColor: [0, 0, 0]},
            head: [['Položka', 'Počet', 'Cena za ks', 'Celkem']],
            body: get_items(),
            startY: 65,
            styles: {font: 'custom'}
        })

        doc.setFontSize(12)
        doc.text(String("Celková cena: " + getFullPrice(get_items())), 150, doc.lastAutoTable.finalY + 10)

        pdfURL = URL.createObjectURL(doc.output("blob"));
        if (download)
            doc.save("test")
    }

    function downloadPDF() {
        generateInvoice(true)
    }
</script>

<iframe src={pdfURL} width="800px" height="700px" class="mb-2"></iframe>
{#if invoice.paid === false}
    <Button href={env.PUBLIC_REVOLUT_PAYMENT_URL + invoice.transactionPublicId}>Zaplatit</Button>
{:else}
    <Button href="#" disabled>Zaplaceno</Button>
{/if}
<Button on:click={downloadPDF}>Stáhnout</Button>