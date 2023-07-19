const menu = document.querySelector(".cpn_right  .menu");
const sidebar = document.querySelector(" .overlay1");
// const main = document.querySelector(" .main")
const cross1 = document.querySelector(".cross2");
const service_advisor = document.querySelector(
  ".sidebar_inner ul  .service-advisor"
);
const service_manager = document.querySelector(
  ".sidebar_inner ul  .service-manager"
);
const advisor = document.querySelector(".advisor");
const add = document.querySelector("#add");
const addbtn1 = document.querySelector(".addbtn1");
const parts = document.querySelector("#req-parts");
const qty = document.querySelector("#qty");
const card = document.querySelector(".card");
const unitprice = document.querySelector("#unitprice");
const labourcharge = document.querySelector("#labourcharge");
const subtotal = document.querySelector("#subtotal");
const administrator = document.querySelector("#administrator");
const navAdmin = document.querySelector("#nav-admin");
// jobcard related
const dashboard = document.querySelector(".dashboard");
const preInvoiceDesc = document.querySelector(".preInvoice_desc");
const mainInvoiceDesc = document.querySelector(".mainInvoice_desc");
const jobCardButton = document.querySelector("#jobCardButton");
const preInvoiceButton = document.querySelector("#preInvoiceButton");
const mainInvoiceButton = document.querySelector("#mainInvoiceButton");
const cross4 = document.querySelector(".cross4");
const cross5 = document.querySelector(".cross5");
const jobCardNo = document.querySelector("#jobCardNo");
const jobCardDate = document.querySelector("#jobCardDate");
const jobCardRegNo = document.querySelector("#jobCardRegNo");
const jobCardKM = document.querySelector("#jobCardKM");
const jobCardTime = document.querySelector("#jobCardTime");
const jobCardTimeOut = document.querySelector("#jobCardTimeOut");
const jobCardVehicleMake = document.querySelector("#jobCardVehicleMake");
const jobCardVehicleModel = document.querySelector("#jobCardVehicleModel");
const jobCardCustomerName = document.querySelector("#jobCardCustomerName");
const jobCardCustomerContact = document.querySelector(
  "#jobCardCustomerContact"
);
const jobCardCustomerAddress = document.querySelector(
  "#jobCardCustomerAddress"
);
const jobCardWorkRequired = document.querySelector("#jobCardWorkRequired");
const jobCardWorkDone = document.querySelector("#jobCardWorkDone");

const jobCardhistory = document.querySelector(".jobCardhistory");
const jobCardhistorybtn = document.querySelectorAll(".jobCardHistoryBtn");
const jobCardVehicleType = document.querySelector("#jobCardVehicleType");
const jobCardUnitPrice = document.querySelector("#jobCardUnitPrice");
const jobCardLabourCharge = document.querySelector("#jobCardLabourCharge");
const jobCardGSTIN = document.querySelector("#gstIN");
const jobCardInvoiceNO = document.querySelector("#invoiceNo");
const jobCardTable1 = document.querySelector("#preview-table tbody");
const jobCardTable2 = document.querySelector("#preview-table1 tbody");
const td_cross = document.querySelector("#preview-table tbody td_cross");
const newJobcard = document.querySelector(".newJobCard");
const loadingwindow = document.querySelector(".loading-window");
const comingSoon = document.querySelectorAll(".comingSoon");
const serviceAdvisorButton = document.querySelector(".serviceAdvisorButton");
const overAdministrator = document.querySelector(".overAdministrator");
const overHR = document.querySelector(".overHR");
const overAccManagerr = document.querySelector(".overAccManagerr");
const overServiceManager = document.querySelector(".overServiceManager");
const overServiceAdvisor = document.querySelector(".overServiceAdvisor");
const overBodyManager = document.querySelector(".overBodyManager");
const overBodyAdvisor = document.querySelector(".overBodyAdvisor");
const overCRM = document.querySelector(".overCRM");
const overCRE = document.querySelector(".overCRE");
const overSPM = document.querySelector(".overSPM");
const overSPE = document.querySelector(".overSPE");
const overFloorSup = document.querySelector(".overFloorSup");
const form = document.querySelector("form");
const getButtonOption = document.querySelectorAll(".getButtonOption");

// invoices related
const invoice = document.querySelector(".invoice");
const invoiceGSTIN = document.querySelectorAll(".gstinNO p ");
const invoiceInvoiceNO = document.querySelectorAll(".invoiceNO p ");
const invoiceJobNo = document.querySelectorAll(".jobno p");
const invoiceDate = document.querySelectorAll(".date  p");
const invoiceTime = document.querySelectorAll(".time p ");
const invoiceCustomerName = document.querySelectorAll(".customer_info h2 ");
const invoiceCustomerNO = document.querySelectorAll(".customer_info h3 ");
const invoiceCustomerAdd = document.querySelectorAll(".customer_info p ");
const invoiceVehicleMake = document.querySelectorAll(".desc1 p ");
const invoiceVehicleModel = document.querySelectorAll(".desc2 p ");
const invoiceVehicleRegNo = document.querySelectorAll(".desc3 p ");
const invoiceVehicleKM = document.querySelectorAll(".desc4 p ");
const invoiceTotal = document.querySelectorAll(".pre_total p ");
const invoiceLabourTotal = document.querySelectorAll(".labour_total p ");
const invoiceLabourSubTotal = document.querySelectorAll(".labour_subtotal p ");
const invoiceLabourTaxTotal = document.querySelectorAll(".labourTax_total p ");
const invoicePartsTotal = document.querySelectorAll(".parts_total p ");
const invoicePartsSubTotal = document.querySelectorAll(".parts_subtotal p ");
const invoicePartsTaxTotal = document.querySelectorAll(".partsTax_total p ");
let invoiceDiscountlabour = document.querySelectorAll("#discount ");
let invoiceDiscountparts = document.querySelectorAll("#discount1 ");
let parts_total_amount = document.getElementById("grossAmount");
let labour_total_amount = document.getElementById("grossAmount1");
const invoicePartsPrepaidAmt = document.querySelectorAll("#paidAmt ");
const invoicePartsPrepaidAmnt = document.querySelectorAll("#paidAmnt ");
const invoicePartsBalAmt = document.querySelectorAll("#balanceAmt ");
const invoicePartsBalAmnt = document.querySelectorAll("#balanceAmnt ");
const invoiceTableParts = document.querySelectorAll("#parts_desc tbody");
const invoiceTableLabour = document.querySelectorAll("#labour_desc tbody");
const logout = document.querySelector(".cpn_right button");
const invoiceDiscountOnLabour = document.querySelector(".discountOnLabour p");
const invoiceDiscountOnParts = document.querySelector(".discountOnParts p");
const openInventory = document.querySelectorAll(".openInventory");
const SpareManager = document.querySelector("#SpareManager");
// ...................................estimate start............................................................
const estimateInvoiceDesc = document.querySelector(".estimate_desc");
const estimateInvoiceButton = document.querySelector("#estimateInvoiceButton");
const crossEstimate = document.querySelector(".crossEstimate");
const estimateButton = document.querySelector("#estimateButton");
const estHistory = document.querySelectorAll(".estHistory");
const EstimateHistory = document.querySelector(".EstimateHistory");
const jobCardOpener = document.querySelectorAll(".jobCardOpener");
var estimateResponseData = [];

jobCardOpener.forEach(function (e) {
  e.addEventListener("click", function () {
    axios
      .get("/center/getjobnumber", {
        withCredentials: true,
      })
      .then((res) => {
        document.querySelector(".currentInvoiveNumber").value =
          res.data.currentJobCards + 1;
        document.querySelector(".getEstimateNumber").textContent =
          res.data.currentEstimates + 1;
        document.querySelector("#jobCardNo").value =
          res.data.currentJobCards + 1;
      })
      .catch((err) => console.log(err));
  });
});

document
  .querySelector(".jobbcarddformm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(".jobbcarddformm").submit();
  });
function convertHTMLToPDFestimate() {
  const { jsPDF } = window.jspdf;
  var doc = new jsPDF("p", "mm", [
    1.414 * window.innerWidth,
    window.innerWidth,
  ]);
  var pdfjs = document.querySelector(".estimate_desc");

  doc.html(pdfjs, {
    callback: function (doc) {
      doc.save("estimate.pdf");
      mainInvoiceButton.style.display = "initial";
      cross5.style.display = "initial";
    },
  });
}
crossEstimate.addEventListener("click", function () {
  advisor.style.display = "flex";
  invoice.style.display = "none";
  estimateInvoiceDesc.style.display = "none";
});

// ..................................estimate end....................................................................

let hsn = document.getElementById("HSN");
let part = document.getElementById("part");
let Qnt = document.getElementById("Qnt");
let unit = document.getElementById("unit");
let tax = document.getElementById("tax");
let labour = document.getElementById("labour");
let total = document.getElementById("total");
let taxOnParts = document.getElementById("taxOnParts");
let taxOnLabour = document.getElementById("taxOnLabour");
let taxOnLabourB = document.getElementById("taxOnLabourB");
let grossAmount = document.getElementById("grossAmount");
let labourGrossAmount = document.getElementById("grossAmount1");
let grossTotal = document.getElementById("grossTotal");

// let totals = "";

let jobCardLabourTax = 18;

menu.addEventListener("click", function () {
  sidebar.style.display = "initial";
});

cross1.addEventListener("click", function () {
  sidebar.style.display = "none";
});

service_advisor.addEventListener("click", function () {
  administrator.style.display = "none";
  loadingwindow.style.display = "none";
  serviceAdvisorButton.style.display = "initial";
  advisor.style.display = "none";
  EstimateHistory.style.display = "none";
});

dashboard.addEventListener("click", function () {
  advisor.style.display = "initial";
  serviceAdvisorButton.style.display = "none";
});

newJobcard.addEventListener("click", function () {
  administrator.style.display = "none";
  loadingwindow.style.display = "none";
  serviceAdvisorButton.style.display = "none";
  advisor.style.display = "initial";
  jobCardhistory.style.display = "none";
  EstimateHistory.style.display = "none";
});
estHistory.forEach((elemm, id) => {
  elemm.addEventListener("click", () => {
    EstimateHistory.style.display = "initial";
    administrator.style.display = "none";
    loadingwindow.style.display = "none";
    serviceAdvisorButton.style.display = "none";
    advisor.style.display = "none";
    let historyClutter = "";
    axios
      .get("/center/showEstimate", {
        withCredentials: true,
      })
      .then((res) => {
        estimateResponseData = res.data;
        res.data.reverse().forEach((e, iddx) => {
          let partsClutter = " ";
          let labourClutter = " ";
          e.arr.forEach((ee, idx) => {
            partsClutter += ` <tr >
           <th scope="row">${idx + 1}</th>
           <td>${ee.hsn}</td>
           <td>${ee.part}</td>
           <td>${ee.Qnt}</td>
           <td>${ee.unit}</td>
           <td>₹${ee.partsSubtotal}</td>
           <td>₹${ee.taxableAmt}</td>
           <td>${ee.tax}</td>
           <td>₹${ee.taxOnParts}</td>
           <td>₹${ee.total}</td>
           </tr>`;
          });
          e.Labour_arr.forEach((ee, idx) => {
            labourClutter += `
           <tr >
           <th scope="row">${idx + 1}</th>
           <td>${ee.labourDesc}</td>
           <td>₹${ee.labour}</td>
           <td>${ee.taxOnLabour}%</td>
           <td>₹${ee.labour_total}</td>
           </tr>
           `;
          });

          historyClutter += `
      <div class="jobCardBox container d-flex">
        <div class="leftContainer">
          <h6><b>Name - </b>${e.jobCardCustomerName}</h6>
          <h6><b>Estimate Number- </b>${res.data.length - iddx}</h6>
          <h6><b>Vechical Number - </b>${e.jobCardRegNo}</h6>
          <h6><b>Vechical - </b>${e.jobCardVehicleMake} - ${
            e.jobCardVehicleModel
          }</h6>
        </div>
        <div class="rightContainer">
          <h6><b>Date - </b> ${
            e.updatedAt ? e.updatedAt.split("T")[0] : "NA"
          }</h6>
          <h6><b>Contact Number - </b>${e.jobCardCustomerContact} </h6>
          <h6><b>Grand Total- </b>${e.grandTotal}</h6>
          <h6><b>Kilometers - </b> ${e.jobCardKM} KM</h6>
        </div>
      </div>
      <div id="estimateBoxTable">
      <div style="overflow: auto; width: 100%;">
        <table class="table table-secondary rounded tableBoder" style="overflow: hidden;">
          <thead>
            <tr>
             <th scope="col">Serial No.</th>
             <th scope="col">HSN</th>
             <th scope="col">Part</th>
              <th scope="col">Quantity</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Parts Subtotal</th>
              <th scope="col">Taxable Amt</th>
              <th scope="col">Tax</th>
              <th scope="col">Tax On Parts</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
              ${partsClutter}
          </tbody>
       </table>
       </div>
       <div style="overflow: auto; width: 100%;">
        <table class="table table-secondary rounded tableBoder" style="overflow: hidden;">
        <thead>
          <tr>
           <th scope="col">Serial No. </th>
           <th scope="col">Labour Desc</th>
            <th scope="col">Labour</th>
            <th scope="col">Tax On Labour</th>
            <th scope="col">Labour Total</th>
          </tr>
        </thead>
        <tbody>
            ${labourClutter}
        </tbody>
       </table>
        <h5><b>Grand total: </b>${e.grandTotal} </h5>
     </div>
     </div>
      <hr>
      <br>
      `;
        });
        document.querySelector("#allestimateCards").innerHTML = historyClutter;
      })
      .catch((err) => console.log(err));
  });
});
document.querySelector(".findEstimate").addEventListener("input", (event) => {
  console.log(event.target.value);
  if (event.target.value < estimateResponseData.length) {
    let ourvalue = estimateResponseData[event.target.value];
  }
});

// console.log(comingSoon);
comingSoon.forEach((elemm, id) => {
  elemm.addEventListener("click", () => {
    administrator.style.display = "none";
    advisor.style.display = "none";
    serviceAdvisorButton.style.display = "none";
    loadingwindow.style.display = "initial";
    SpareManager.style.display = " none";
    jobCardhistory.style.display = "none";
    EstimateHistory.style.display = "none";
  });
});
getButtonOption.forEach((elemm, id) => {
  elemm.addEventListener("click", () => {
    administrator.style.display = "none";
    serviceAdvisorButton.style.display = "initial";
    loadingwindow.style.display = "none";
    advisor.style.display = "none";
    SpareManager.style.display = "none";
    jobCardhistory.style.display = "none";
    EstimateHistory.style.display = "none";
  });
});
//..........................job card initial....................................................
jobCardhistorybtn.forEach((elemm, id) => {
  elemm.addEventListener("click", () => {
    administrator.style.display = "none";
    loadingwindow.style.display = "none";
    serviceAdvisorButton.style.display = "none";
    advisor.style.display = "none";
    jobCardhistory.style.display = "initial";
    EstimateHistory.style.display = "none";
    let historyClutter = "";

    axios
      .get("/center/showJobcards", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        res.data.reverse().forEach((e, idddx) => {
          let partsClutter = "";
          let labourClutter = "";
          e.arr.forEach((ee, idx) => {
            partsClutter += ` <tr >
             <th scope="row">${idx + 1}</th>
             <td>${ee.hsn}</td>
             <td>${ee.part.split("- ", 2).at(-1)}</td>
             <td>${ee.Qnt}</td>
             <td>${ee.unit}</td>
             <td>${ee.partsSubtotal}</td>
             <td>${ee.taxableAmt}</td>
             <td>${ee.tax}</td>
             <td>${ee.taxOnParts}</td>
             <td>${ee.total}</td>
             </tr>`;
          });
          e.Labour_arr.forEach((ee, idx) => {
            labourClutter += `
             <tr >
             <th scope="row">${idx + 1}</th>
             <td>${ee.labour}</td>
             <td>${ee.labourDesc}</td>
             <td>${ee.labour_total}</td>
             <td>${ee.taxOnLabour}</td>
             </tr>
             `;
          });

          historyClutter += `
        <div class="jobCardBox container d-flex">
          <div class="leftContainer">
            <h6><b>Name - </b>${e.jobCardCustomerName}</h6>
            <h6><b>Jobcard Number- </b>${res.data.length - idddx}</h6>
            <h6><b>Vechical Number - </b>${e.jobCardRegNo}</h6>
            <h6><b>Vechical - </b>${e.jobCardVehicleMake} - ${
            e.jobCardVehicleModel
          }</h6>
          </div>
          <div class="rightContainer">
            <h6><b>Date - </b> ${
              e.jobCardDate
                ? e.jobCardDate.slice(0, 10).split("-").reverse().join("-")
                : "NA"
            }</h6>
            <h6><b>Contact Number - </b>${e.jobCardCustomerContact} </h6>
            <h6><b>Grand Total- </b>${e.grandTotal}</h6>
            <h6><b>Kilometers - </b> ${e.jobCardKM} KM</h6>
          </div>
        </div>
        <div id="jobCardBoxTable">
        <div style="overflow: auto; width: 100%;">
          <table class="table table-secondary rounded tableBoder" style="overflow: hidden;">
            <thead>
              <tr>
               <th scope="col">Serial No.</th>
               <th scope="col">HSN</th>
               <th scope="col">Part</th>
                <th scope="col">Quantity</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Parts Subtotal</th>
                <th scope="col">Taxable Amt</th>
                <th scope="col">Tax</th>
                <th scope="col">Tax On Parts</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
                ${partsClutter}
            </tbody>
         </table>
         </div>
         <div style="overflow: auto; width: 100%;">
          <table class="table table-secondary rounded tableBoder" style="overflow: hidden;">
          <thead>
            <tr>
             <th scope="col">Serial No. </th>
              <th scope="col">labour</th>
              <th scope="col">labourDesc</th>
              <th scope="col">labour_total</th>
              <th scope="col">taxOnLabour</th>
            </tr>
          </thead>
          <tbody>
              ${labourClutter}
          </tbody>
         </table>
          <h5><b>Grand total: </b>${e.grandTotal} </h5>
       </div>
       </div>
        <hr>
        <br>
        `;
        });
        document.querySelector("#allJobCards").innerHTML = historyClutter;
      })
      .catch((err) => console.log(err));
  });
});

// jobCardhistorybtn.addEventListener("click", function () {
//   administrator.style.display = "none";
//   loadingwindow.style.display = "none";
//   serviceAdvisorButton.style.display = "none";
//   advisor.style.display = "none";
//   jobCardhistory.style.display = "initial"
// });
openInventory.forEach((elemm, id) => {
  elemm.addEventListener("click", () => {
    SpareManager.style.display = "initial";
    administrator.style.display = "none";
    serviceAdvisorButton.style.display = "none";
    loadingwindow.style.display = "none";
    advisor.style.display = "none";
    EstimateHistory.style.display = "none";
  });
});

navAdmin.addEventListener("click", () => {
  console.log("addmin");
  advisor.style.display = "none";
  loadingwindow.style.display = "none";
  administrator.style.display = "initial";
  serviceAdvisorButton.style.display = "none";
  SpareManager.style.display = "none";
  jobCardhistory.style.display = "none";
  EstimateHistory.style.display = "none";
});

function display() {
  administrator.style.display = "none";
  advisor.style.display = "none";
  sidebar.style.display = "none";
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

overAdministrator.addEventListener("click", function () {
  display();
  administrator.style.display = "initial";
  SpareManager.style.display = "none";
  jobCardhistory.style.display = "none";
  EstimateHistory.style.display = "none";
});

overServiceAdvisor.addEventListener("click", function () {
  display();
  serviceAdvisorButton.style.display = "initial";
  advisor.style.display = "none";
  SpareManager.style.display = "none";
  jobCardhistory.style.display = "none";
  EstimateHistory.style.display = "none";
});

function calculation(num1, num2) {
  return Number(num1) + Number(num2);
}
function substraction(num1, num2) {
  return Number(num1) - Number(num2);
}

function multiplication(num1, num2) {
  return Number(num1) * Number(num2);
}

function values() {
  let jobCardGST = tax.value;
  let calc = multiplication(Qnt.value, unit.value);
  total.value = calc;
  priceAfterGST = Math.round((calc * jobCardGST) / 100);
  taxOnParts.value = Math.round(priceAfterGST);
  total.value = priceAfterGST + calc;
  priceOfLabourGST = Math.round(
    (Number(labour.value) * jobCardLabourTax) / 100
  );
  labour_total.value = priceOfLabourGST + Number(labour.value);
  let partsTableTotal = multiplication(Qnt.value, unit.value);
  partsSubtotal.value = partsTableTotal;
  taxableAmt.value = partsTableTotal;
  taxOnLabourB.value = priceOfLabourGST;
}
Qnt.addEventListener("input", function () {
  values();
});

unit.addEventListener("input", function () {
  values();
});

labour.addEventListener("input", function () {
  values();
});

tax.addEventListener("change", function (e) {
  values();
});

function discountLabour() {
  let discount_labour = invoiceDiscountlabour[0].value;
  labourDiscount =
    (Number(invoiceLabourSubTotal[0].textContent) * discount_labour) / 100;
  labourTaxDiscount =
    (Number(invoiceLabourTaxTotal[0].textContent) * discount_labour) / 100;
  labourCalculation = calculation(labourDiscount, labourTaxDiscount);
  invoiceLabourTotal[0].textContent = substraction(
    labourGrossAmount.value,
    labourCalculation
  );
}
function discountParts() {
  let discount_parts = invoiceDiscountparts[0].value;
  partsDiscount =
    (Number(invoicePartsSubTotal[0].textContent) * discount_parts) / 100;
  partsTaxDiscount =
    (Number(invoicePartsTaxTotal[0].textContent) * discount_parts) / 100;
  partsCalculation = calculation(partsDiscount, partsTaxDiscount);
  invoicePartsTotal[0].textContent = substraction(
    grossAmount.value,
    partsCalculation
  );
}
invoiceDiscountlabour[0].addEventListener("input", function () {
  discountLabour();
  CalcParts = calculation(
    invoicePartsTotal[0].textContent,
    invoiceLabourTotal[0].textContent
  );
  invoiceTotal[0].textContent = CalcParts;
});
invoiceDiscountparts[0].addEventListener("input", function () {
  discountParts();
  CalcParts = calculation(
    invoicePartsTotal[0].textContent,
    invoiceLabourTotal[0].textContent
  );

  invoiceTotal[0].textContent = CalcParts;
});

jobCardButton.addEventListener("click", function (e) {
  e.preventDefault();
  advisor.style.display = "none";
  invoice.style.display = "initial";
  preInvoiceDesc.style.display = "flex";
  invoiceJobNo[0].textContent = jobCardNo.value;
  invoiceDate[0].textContent = jobCardDate.value;
  invoiceVehicleRegNo[0].textContent = jobCardRegNo.value;
  invoiceVehicleKM[0].textContent = jobCardKM.value;
  invoiceTime[0].textContent = jobCardTime.value;
  invoiceVehicleMake[0].textContent = jobCardVehicleMake.value;
  invoiceVehicleModel[0].textContent = jobCardVehicleModel.value;
  invoiceCustomerName[0].textContent = jobCardCustomerName.value;
  invoiceCustomerNO[0].textContent = jobCardCustomerContact.value;
  invoiceCustomerAdd[0].textContent = jobCardCustomerAddress.value;
  invoiceTableParts[0].innerHTML = jobCardTable1.innerHTML;
  invoiceTableLabour[0].innerHTML = jobCardTable2.innerHTML;
  invoiceGSTIN[0].textContent = jobCardGSTIN.value;
  invoiceInvoiceNO[0].textContent = jobCardInvoiceNO.value;
  invoicePartsTotal[0].textContent = grossAmount.value;
  invoiceLabourTotal[0].textContent = labourGrossAmount.value;
  invoiceTotal[0].textContent = grossTotal.value;
});

invoicePartsPrepaidAmt[0].addEventListener("input", function () {
  let substract = substraction(
    invoiceTotal[0].textContent,
    invoicePartsPrepaidAmt[0].value
  );
  invoicePartsBalAmt[0].textContent = substract;
});

preInvoiceButton.addEventListener("click", function (e) {
  e.preventDefault();
  advisor.style.display = "none";
  invoice.style.display = "initial";
  preInvoiceDesc.style.display = "none";
  mainInvoiceDesc.style.display = "flex";
  invoiceJobNo[1].textContent = jobCardNo.value;
  invoiceDate[1].textContent = jobCardDate.value;
  invoiceVehicleRegNo[1].textContent = jobCardRegNo.value;
  invoiceVehicleKM[1].textContent = jobCardKM.value;
  invoiceTime[1].textContent = jobCardTime.value;
  invoiceVehicleMake[1].textContent = jobCardVehicleMake.value;
  invoiceVehicleModel[1].textContent = jobCardVehicleModel.value;
  invoiceCustomerName[1].textContent = jobCardCustomerName.value;
  invoiceCustomerNO[1].textContent = jobCardCustomerContact.value;
  invoiceCustomerAdd[1].textContent = jobCardCustomerAddress.value;
  invoiceTableParts[1].innerHTML = jobCardTable1.innerHTML;
  invoiceTableLabour[1].innerHTML = jobCardTable2.innerHTML;
  invoiceGSTIN[1].textContent = jobCardGSTIN.value;
  invoiceInvoiceNO[1].textContent = jobCardInvoiceNO.value;
  invoicePartsTotal[1].textContent = grossAmount.value;
  invoiceLabourTotal[1].textContent = labourGrossAmount.value;
  invoiceTotal[1].textContent = grossTotal.value;
  invoicePartsPrepaidAmnt[0].textContent = invoicePartsPrepaidAmt[0].value;
  invoicePartsBalAmnt[0].textContent = invoicePartsBalAmt[0].textContent;
  invoiceDiscountOnLabour.textContent = invoiceDiscountlabour[0].value;
  invoiceDiscountOnParts.textContent = invoiceDiscountparts[0].value;

  //............................................jobcard del..........................
  jobcard_details.jobcardNo = jobCardNo.value;
  jobcard_details.jobCardDate = jobCardDate.value;
  jobcard_details.jobCardRegNo = jobCardRegNo.value;
  jobcard_details.jobCardKM = jobCardKM.value;
  jobcard_details.jobCardTime = jobCardTime.value;
  jobcard_details.jobCardVehicleMake = jobCardVehicleMake.value;
  jobcard_details.jobCardVehicleModel = jobCardVehicleModel.value;
  jobcard_details.jobCardCustomerName = jobCardCustomerName.value;
  jobcard_details.jobCardCustomerContact = jobCardCustomerContact.value;
  jobcard_details.jobCardCustomerAddress = jobCardCustomerAddress.value;
  jobcard_details.jobCardGSTIN = jobCardGSTIN.value;
  jobcard_details.jobCardInvoiceNO = jobCardInvoiceNO.value;
  jobcard_details.grandTotal = grossTotal.value;
  jobcard_details.invoicePaidAmt = invoicePartsPrepaidAmt[0].value;
  jobcard_details.invoiceBalAmt = invoicePartsBalAmt[0].textContent;
  jobcard_details.invoiceDiscountOnlabour = invoiceDiscountlabour[0].value;
  jobcard_details.invoiceDiscountOnparts = invoicePartsPrepaidAmt[0].value;
  jobcard_details.taxOnLabour = invoiceLabourTaxTotal[1].textContent;
  jobcard_details.labour_subtotal = invoiceLabourSubTotal[1].textContent;
  jobcard_details.parts_subtotal = invoicePartsSubTotal[1].textContent;
  jobcard_details.taxOnParts = invoicePartsTaxTotal[1].textContent;
  jobcard_details.Labour_arr = Labour_arr;
  jobcard_details.arr = arr;
  jobcard_details.jobCardVehicleType = jobCardVehicleType.value;
  jobcard_details.parts_total_amount = parts_total_amount.value;
  jobcard_details.labour_total_amount = labour_total_amount.value;
  jobcard_details.part_discription =
    document.querySelector("#partJobCard").value;
});
//......................................refreash btn.........................
const refeashBtn = document.querySelector(".refeashBtn");
refeashBtn.addEventListener("click", function (e) {
  jobCardDate.value = " ";
  jobCardRegNo.value = " ";
  jobCardKM.value = " ";
  jobCardTime.value = " ";
  jobCardTimeOut.value = " ";
  jobCardVehicleMake.value = " ";
  jobCardVehicleModel.value = " ";
  jobCardCustomerName.value = " ";
  jobCardCustomerContact.value = " ";
  jobCardCustomerAddress.value = " ";
  jobCardWorkDone.value = " ";
  jobCardWorkRequired.value = " ";
  jobCardInvoiceNO.value = " ";
  taxableAmt.value = " ";
  labourDesc.value = "";
  labour.value = "";
  labour_total.value = "";
  grossTotal.value = " ";
  taxOnParts.value = "";
  Labour_arr = [];
  arr = [];
  parts_total_amount.value = " ";
  labour_total_amount.value = " ";
  document.querySelector("#partJobCard").value = "";
  document.querySelector("#preview-table tbody").innerHTML = "";
  document.querySelector("#preview-table1 tbody").innerHTML = "";
  // document.querySelector("#jobcard_form").reset()
});

mainInvoiceButton.addEventListener("click", function (e) {
  e.preventDefault();
  mainInvoiceButton.style.display = "none";
  cross5.style.display = "none";

  // window.print(e)
  convertHTMLToPDF();
  // console.log(jobcard_details)
  axios
    .post("/center/addJobcards", jobcard_details, {
      withCredentials: true,
    })
    .then((res) => {
      console.log("ddddddd", res.data);
    })
    .catch((err) => console.log(err));
});
function convertHTMLToPDF() {
  const { jsPDF } = window.jspdf;
  var doc = new jsPDF("p", "mm", [
    1.414 * window.innerWidth,
    window.innerWidth,
  ]);
  var pdfjs = document.querySelector(".mainInvoice_desc");

  doc.html(pdfjs, {
    callback: function (doc) {
      doc.save("bill.pdf");
      mainInvoiceButton.style.display = "initial";
      cross5.style.display = "initial";
    },
  });
}
cross4.addEventListener("click", function () {
  // advisor.style.display = "initial";
  // invoice.style.display = "none";
  location.reload();
});

cross5.addEventListener("click", function () {
  mainInvoiceDesc.style.display = "none";
  preInvoiceDesc.style.display = "flex";
});

let arr = [];

var tableClutter = `<tr class="tr">
<th class="th">SrNo</th>
<th class="th">HSN/SAC</th>
<th class="th">REQ Part</th>
<th class="th">Quantity</th>
<th class="th">UNit Price</th>
<th class="th">Tax</th>
<th class="th">Tax on Parts</th>
<th class="th">SubTotal</th>
</tr>
`;

console.log(arr);

add.addEventListener("click", (e) => {
  e.preventDefault();
  tableClutter = `<tr class="tr">
<th class="th">Serial No.</th>
<th class="th">HSN/SAC</th>
<th class="th">Part</th>
<th class="th">Quantity</th>
<th class="th">Unit Price</th>
<th class="th">Parts Subtotal</th>
<th class="th">Taxable Amount</th>
<th class="th">Tax</th>
<th class="th">Tax On Parts</th>
<th class="th">Total</th>
</tr>
`;

  // handle submit
  let hsn = document.getElementById("HSN");
  // let partslist = document.getElementById("part");
  let part = document.querySelector("#partAB");
  let Qnt = document.getElementById("Qnt");
  let unit = document.getElementById("unit");
  let partsSubtotal = document.getElementById("partsSubtotal");
  let taxableAmt = document.getElementById("taxableAmt");
  let tax = document.getElementById("tax");
  let taxOnParts = document.getElementById("taxOnParts");
  let total = document.getElementById("total");

  if (
    hsn.value == "" ||
    part.value == "" ||
    Qnt.value == "" ||
    partsSubtotal.value == "" ||
    taxableAmt.value == "" ||
    unit.value == "" ||
    tax.value == "" ||
    taxOnParts.value == "" ||
    total.value == ""
  ) {
    window.alert("input must not be empty!");
  } else {
    console.log(
      `This form has a HSN of ${hsn.value}, part of ${part.value}, quantity of ${Qnt.value}, unit of ${unit.value}, tax of ${tax.value}, labour of ${labour.value}, total of ${total.value} `
    );

    let data = {
      hsn: hsn.value,
      part: part.value + "-" + document.querySelector("#partJobCard").value,
      Qnt: Qnt.value,
      unit: unit.value,
      tax: tax.value,
      partsSubtotal: partsSubtotal.value,
      taxableAmt: taxableAmt.value,
      taxOnParts: taxOnParts.value,
      total: total.value,
    };

    arr.push(data);

    hsn.value = "";
    part.value = "";
    Qnt.value = "";
    unit.value = "";
    tax.value = "";
    taxOnParts.value = "";
    total.value = "";
    partsSubtotal.value = "";
    taxOnParts.value = "";
    taxOnParts.value = "";
    taxableAmt.value = "";
  }

  let partsTax = 0;
  let grosstotal = 0;
  let grossTax = 0;
  let subTotal_Parts = 0;
  arr.forEach((elem, idx) => {
    tableClutter += `<tr class="tr">
      <td class="td">${idx + 1}</td>
      <td class="td">${elem.hsn}</td>
      <td class="td">${elem.part}</td>
      <td class="td">${elem.Qnt}</td>
      <td class="td">${elem.unit}</td>
      <td class="td">${elem.partsSubtotal}</td>
      <td class="td">${elem.taxableAmt}</td>
      <td class="td">${elem.tax}</td>
      <td class="td">${elem.taxOnParts}</td>
      <td class="td">${elem.total}</td>
  </tr>`;
    grosstotal += Number(elem.total);
    grossAmount.value = grosstotal;

    grossTax += priceAfterGST;
    taxOnParts.value = grossTax;

    partsTax += Number(elem.taxOnParts);
    invoicePartsTaxTotal[0].textContent = partsTax;
    invoicePartsTaxTotal[1].textContent = partsTax;

    let gross = calculation(grossAmount.value, labourGrossAmount.value);
    grossTotal.value = gross;

    subTotal_Parts += Number(elem.partsSubtotal);
    invoicePartsSubTotal[0].textContent = subTotal_Parts;
    invoicePartsSubTotal[1].textContent = subTotal_Parts;
  });

  document.querySelector("#ab_parts_array").value = JSON.stringify(arr);
  document.querySelector("#preview-table tbody").innerHTML = tableClutter;
});

// LabourTable

let Labour_arr = [];

var labourClutter = `<tr class="tr">
<th class="th">SrNo</th>
<th class="th">Labour Description</th>
<th class="th">Labour Charge</th>
<th class="th">Tax On Labour</th>
<th class="th">SubTotal</th>
</tr>
`;

addbtn1.addEventListener("click", (e) => {
  e.preventDefault();
  labourClutter = `<tr class="tr">
  <th class="th">SrNo</th>
  <th class="th">Labour Description</th>
  <th class="th">Labour Charge</th>
  <th class="th">Tax%</th>
  <th class="th">Tax On Labour</th>
  <th class="th">SubTotal</th>
</tr>
`;

  let labourDesc = document.getElementById("labourDesc");
  let taxOnLabour = document.getElementById("taxOnLabour");
  let taxOnLabourB = document.getElementById("taxOnLabourB");
  let labour = document.getElementById("labour");
  let labour_total = document.getElementById("labour_total");

  if (
    labourDesc.value == "" ||
    taxOnLabour.value == "" ||
    taxOnLabourB.value == "" ||
    labour.value == "" ||
    labour_total.value == ""
  ) {
    window.alert("input of labour must not be empty!");
  } else {
    let labour_data = {
      labourDesc: labourDesc.value,
      labour: labour.value,
      taxOnLabour: taxOnLabour.value,
      taxOnLabourB: Math.round(taxOnLabourB.value),
      labour_total: Math.round(labour_total.value),
    };

    Labour_arr.push(labour_data);

    labourDesc.value = "";
    labour.value = "";
    labour_total.value = "";
    // taxOnLabour.value = "";
    taxOnLabourB.value = "";
  }

  let labour_grosstotal = 0;
  let labour_subtotal = 0;
  let labourTax = 0;
  Labour_arr.forEach((elem, idx) => {
    labourClutter += `<tr class="tr">
      <td class="td">${idx + 1}</td>
      <td class="td">${elem.labourDesc}</td>
      <td class="td">${elem.labour}</td>
      <td class="td">${elem.taxOnLabour}</td>
      <td class="td">${elem.taxOnLabourB}</td>
      <td class="td">${elem.labour_total}</td>
  
  </tr>`;
    labour_grosstotal += Number(elem.labour_total);
    labourGrossAmount.value = labour_grosstotal;

    labourTax += Number(elem.taxOnLabourB);
    invoiceLabourTaxTotal[0].textContent = labourTax;
    invoiceLabourTaxTotal[1].textContent = labourTax;

    let gross = calculation(grossAmount.value, labourGrossAmount.value);
    grossTotal.value = gross;

    labour_subtotal += Number(elem.labour);
    invoiceLabourSubTotal[0].textContent = labour_subtotal;
    invoiceLabourSubTotal[1].textContent = labour_subtotal;
  });

  document.querySelector("#ab_labour_array").value = JSON.stringify(Labour_arr);
  document.querySelector("#preview-table1 tbody").innerHTML = labourClutter;
});

document.querySelector(".addPartToDB").addEventListener("click", () => {
  document.querySelector(".addPartToDB").style.display = "none";
  document.querySelector(".closeAddPartToDB").style.display = "initial";
  document.querySelector("#addSpareInputs").style.display = "block";
});

document.querySelector(".closeAddPartToDB").addEventListener("click", () => {
  document.querySelector("#addSpareInputs").style.display = "none";
  document.querySelector(".addPartToDB").style.display = "initial";
  document.querySelector(".closeAddPartToDB").style.display = "none";
});

document
  .querySelector("#addSpareInputs form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    formAddInventory = document.querySelector("#addSpareInputs form");
    const formData = new FormData(formAddInventory);
    let plainFormData = Object.fromEntries(formData.entries());

    console.log(plainFormData);

    // plainFormData.DBCODE = `${plainFormData.company.slice(
    //   0,
    //   3
    // )}-${plainFormData.model.slice(0, 3)}${plainFormData.model.slice(
    //   -1,
    //   -3
    // )}-${plainFormData.partName.slice(0, 3)}-${plainFormData.partCode}`;

    plainFormData.DBCODE = `${plainFormData.company}-${plainFormData.model}${plainFormData.model}-${plainFormData.partName}-${plainFormData.partCode}`;

    axios
      .post("/center/addtoinventory", plainFormData, {
        withCredentials: true,
      })
      .then((res) => {
        var twoWheelClutter = "";
        axios
          .get("/center/showInventory", {
            withCredentials: true,
          })
          .then((res) => {
            res.data.forEach((data, idx) => {
              const {
                company,
                model,
                partName,
                partCode,
                MRP,
                purchaseCost,
                salePrice,
                DBCODE,
                quantity,
                location,
              } = data;
              twoWheelClutter += `<tr id=" ">
                  <th scope="row">${idx + 1}</th>
                  <td>${company}</td>
                  <td>${model}</td>
                  <td>${partName}</td>
                  <td>${partCode}</td>
                  <td>${MRP}</td>
                  <td>${purchaseCost}</td>
                  <td>${salePrice}</td>
                  <td>${quantity}</td>
                  <td>${location}</td>
                  </tr>
                  `;
            });
            document.querySelector("#add_to_inventory_form").reset();
            document.querySelector("#twtbody").innerHTML = twoWheelClutter;
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
const jobcard_details = {};
