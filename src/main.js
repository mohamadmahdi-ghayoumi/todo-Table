
const container = document.getElementById("container");
const icon_add = document.getElementById("icon-add");
const tbody = document.getElementById("table-tbody");


//modalAdd
const modal_add = document.getElementById("modal-add");
const inputTaske = document.getElementById("inputTaske");
const inputDeadline = document.getElementById("inputDeadline");
const inputDescription = document.getElementById("inputDescription");
const selectPriority = document.getElementById("selectPriority");
const selectStatus = document.getElementById("selectStatus");
const btnSubmit = document.getElementById("btnSubmit");

//spanEror
const errorTaske = document.getElementById("errorTaske");
const errorPriority = document.getElementById("errorPriority");
const errorStatus = document.getElementById("errorStatus");
const errorDeadline = document.getElementById("errorDeadline");
const errorDescription = document.getElementById("errorDescription");

//modalEyes
const modal_eyes = document.getElementById("modal-eyes");
const spanModalTaske = document.getElementById("spanModalTaske");
const spanModalStatus = document.getElementById("spanModalStatus");
const spanModalPriority = document.getElementById("spanModalPriority");
const spanModalDeadline = document.getElementById("spanModalDeadline");
const spanModalDescription = document.getElementById(
  "spanModalDescription"
);
const btnClose = document.getElementById("btnClose");


//modalEdit
const modal_edit = document.getElementById("modal-edit");
const inputModalTaske = document.getElementById("inputModalTaske")
const inputModalDeadline = document.getElementById("inputModalDeadline")
const inputModalDescription = document.getElementById("inputModalDescription")
const selectModalPriority = document.getElementById("selectModalPriority")
const selectModalStatus = document.getElementById("selectModalStatus")
const btnSave = document.getElementById("btnSave")




     
function renderContacts(contacts) {
    // document.querySelectorAll(".parentTr").forEach((item) => item.remove());
    tbody.innerHTML = "";
    contacts.forEach((items) => {
      const tr = document.createElement("tr");
      tr.className = "parentTr h-[50px]";
      tr.id = items.id;
      const td1 = document.createElement("td");
      const spanTaske = document.createElement("span");
      
      td1.className = "border border-slate-300";
      spanTaske.innerText = items.taskeName;
      td1.append(spanTaske)
      const td2 = document.createElement("td");
      const spanPriority = document.createElement("span");
      td2.className = "border border-slate-300 w-1 h-2";
      spanPriority.className = "p-[7px] px-3 rounded-2xl font-bold text-[13px]";
  
      spanPriority.innerText = items.priority;
      if (items.priority === "Low") {
        spanPriority.classList.add("bg-[#ebebeb]");
      } else if (items.priority === "Medium") {
        spanPriority.classList.add("bg-[#ffbe00]"  );
      } else {
        spanPriority.classList.add("bg-[#f41b35]"  , "text-white");
      }
      td2.append(spanPriority)

      const td3 = document.createElement("td");
      const spanStatus = document.createElement("span");
      td3.className = "border border-slate-300";
      spanStatus.innerText = items.status;
      spanStatus.className = "p-[7px] px-3 rounded-2xl font-bold text-[13px]";

      if (items.status === "Todo") {
        spanStatus.classList.add("bg-[#f41b35]" , "text-white");
      } else if (items.status === "Doing") {
        spanStatus.classList.add("bg-[#ffbe00]");
      } else {
        spanStatus.classList.add("bg-[#007f39]" , "text-white");
      }
      td3.append(spanStatus)

      const td4 = document.createElement("td");
      const spanDeadline = document.createElement("span");
      td4.className = "border border-slate-300";
      spanDeadline.innerText = items.deadline;
      spanDeadline.className = "text-[13px] p-[7px] px-3 border-[#5faffe] rounded-2xl border-[1px]"
      td4.append(spanDeadline)
      const td5 = document.createElement("td");
      td5.className =
        "flex  items-center justify-center border border-slate-300 flex-wrap  gap-1 p-5";

      const image_Delete = document.createElement("img");
      image_Delete.className = "bg-[#f41b35] w-5 h-4 rounded-[3px] px-[5px] py-[2px]";
      image_Delete.src = "./asset/image/icon-delete.png";
      const image_Edit = document.createElement("img");
      image_Edit.className = "bg-[#0070fc] w-5 h-4 rounded-[3px] px-[5px] py-[2px]";
      image_Edit.src = "./asset/image/icon-edit.png";
      const image_Eyes = document.createElement("img");
      image_Eyes.className = "bg-[#69757d] w-5 h-4 rounded-[3px] px-[5px] py-[2px]";
      image_Eyes.src = "./asset/image/icon-eye.png";

      td5.append(image_Delete, image_Edit, image_Eyes);
      tr.append(td1, td2, td3, td4, td5);
      tbody.append(tr);

      image_Eyes.addEventListener("click", modalEyes);
      image_Delete.addEventListener("click", deleteData);
      image_Edit.addEventListener("click", editData);
    });
  }

