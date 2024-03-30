<script>

    import TableMyInvoices from "$lib/components/table/TableMyInvoices.svelte";
    import {Button} from "flowbite-svelte";
    import {jsPDF} from "jspdf";
    import autoTable from 'jspdf-autotable'
    import {onDestroy, onMount} from "svelte";
    import {invoicesNumber} from "../../routes/stores/invoiceStore.js";


    //TODO doplnit aoutomaticky hodnoty do promněných
    onMount(() => {
        //TODO najit v DB podle čísla faktůry
        generateInvoice(false);
        //await load($invoicesNumber)
    })

    onDestroy(() => {
        $invoicesNumber = null;
        $invoicesNumber = $invoicesNumber;
    })

    function load(numberInvoices) {

    }

    function gen_items() {
        let items = [];
        let itemName = ["Regen", "Očkování", "Dlaha"]
        for (let i = 0; i < 10; i++) {
            let item = [itemName[Math.floor(Math.random() * itemName.length)], String(i + ' Kč'), 2, String((i * 2) + ' Kč')];
            items.push(item);
        }
        return items;
    }

    const getFullPrice = function (items) {
        let fullPrice;
        for (let item of items) {
            fullPrice = fullPrice + item[3];
        }
        return fullPrice;
    }

    let pdfURL;

    function generateInvoice(download) {

        URL.revokeObjectURL(pdfURL);
        const doc = new jsPDF();

        doc.setLineHeightFactor(0.5)
        doc.setFontSize(12);
        // doc.addFileToVFS('src/lib/charset/Amiri-Regular.ttf', "Amiri")
        doc.addFont("src/lib/charset/Amiri-Regular.ttf", 'custom', "normal");
        doc.setFont('custom');

        const logo = new Image();
        logo.src = '/src/lib/images/logo_veterina.png';
        doc.addImage(logo, 'PNG', 70, 5, 30, 30);

        doc.setFontSize(25);
        doc.text('Moje Veterina', 10, 10);

        doc.setFontSize(12);
        doc.text('Adresa: Praha 10 Mírov 5', 10, 15);
        doc.text('Telofoní číslo: +420 752 488 589', 10, 20)
        doc.text('IČO: 12345678', 10, 25);
        doc.text('DIČ: CZ12345678', 10, 30);

        doc.text('Plátce', 105, 10);
        doc.text('Jméno a příjmení: Václav Buřil', 105, 15);
        doc.text('Adresa: Rychnov nad Kněžnou, U stadionu 5', 105, 20);

        doc.text('Datum vytvoření: 15.3.2024', 10, 45);
        doc.text('Datum splatnosti: 20.3.2024', 10, 50);

        doc.text(String('Číslo faktůry:' + $invoicesNumber), 105, 45)

        doc.line(100, 3, 100, 60);
        doc.line(5, 60, 200, 60);
        doc.line(5, 3, 5, 60);
        doc.line(5, 3, 200, 3);
        doc.line(200, 3, 200, 60);
        doc.line(5, 40, 200, 40);

        autoTable(doc, {
            headStyles: {fillColor: [0, 0, 0]},
            head: [['Položka', 'Počet', 'Cena za ks', 'Celkem']],
            body: gen_items(),
            startY: 65,
            styles: {font: 'custom'}
        })

        doc.text(String("Celková cena: " + getFullPrice(gen_items())), 5, doc.lastAutoTable.finalY + 10)
        console.log(doc.lastAutoTable.finalY)

        pdfURL = URL.createObjectURL(doc.output("blob"));
        if (download)
            doc.save("test")
    }

    function downloadPDF() {
        generateInvoice(true)
    }
</script>

<iframe src={pdfURL} width="800px" height="700px" class="mb-2"></iframe>
<Button href="/myInvoices">Zpět na výpis</Button>
<!--    TODO dodělat funkci zaplatit-->
<Button>Zaplaťit</Button>
<Button on:click={downloadPDF}>Stáhnout</Button>