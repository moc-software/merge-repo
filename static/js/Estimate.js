// document
//   .querySelector("#estimateInvoiceButton")
//   .addEventListener("click", async (e) => {
//     document.querySelector("#estimateInvoiceButton").style.display = "none";
//     document.querySelector(".crossEstimate").style.display = "none";

//     try {
//       const { jsPDF } = window.jspdf;
//       var doc = new jsPDF("l", "mm", [
//         (4 ) * window.innerWidth,
//         window.innerWidth,
//       ]);
//       var pdfjs = document.querySelector(".estimate_desc");

//       console.log(pdfjs);

//       doc.html(pdfjs, {
//         callback: function (doc) {
//           doc.save("estimate.pdf");
//           document.querySelector("#estimateInvoiceButton").style.display =
//             "initial";
//           document.querySelector(".crossEstimate").style.display = "initial";
//         },
//       });
//     } catch (error) {
//       console.error("Failed to generate PDF", error);
//     }
//   });

