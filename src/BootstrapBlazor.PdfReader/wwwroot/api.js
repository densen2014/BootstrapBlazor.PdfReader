﻿//import '/_content/BootstrapBlazor.PdfReader/pdfobject.min.js';
export function addScript() { 
    let script = document.createElement('script');
    script.src = '/_content/BootstrapBlazor.PdfReader/pdfobject.min.js';
    script.defer = true;
    document.head.appendChild(script);
    return false;
}

export async function showPdf(wrapperc, element, stream) {
    const arrayBuffer = await stream.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: 'application/pdf' });//必须要加type
    const url = URL.createObjectURL(blob);
    var div = element.querySelector("pdfid");
    PDFObject.embed(url, element, { forceIframe: true });//只有iframe可以打开blob链接
    URL.revokeObjectURL(url);
    wrapperc.invokeMethodAsync("Result", "PDFObject OK")
}