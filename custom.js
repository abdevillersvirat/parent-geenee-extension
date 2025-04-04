
// async function autoGetResponse(searchEmail) {
//     // alert("Auto Get Response Function Called");
//     // // var searchEmail = document.getElementById("searchBox").value;
//     // let script = document.createElement('script');
//     // script.src = "https://js.zohostatic.com/support/developer_sdk/v1/js/ZohoDeskClientSDK.min.js";
//     // script.async = true;
//     // document.body.appendChild(script);
//     // console.log("Search Email:", searchEmail);
    
//     var emailDataGeenee = {
//         url: "https://pgapi.prd.parentgeenee.io/support/users?email="+searchEmail,
//         type: "GET",
//         data: {},
//         postBody: {},
//         headers: {
//             "x-api-key": "tiryEFmRIrMvEnTNOEdULqtC1cyl4SOVYmMi6vDmGz3gAUJLTIOLINr5lGxfwwvJ",
//             "Content-Type": "application/json"
//         },
//         connectionLinkName: "parentgeeneedev",
//         responeType: "json"

//     }
//     ZOHODESK.request(emailDataGeenee).then((response) => {
//         // console.log("Response:", response);
//         var rest = JSON.parse(response)
//         //     // console.log(rest);
//         //     var result = JSON.parse(rest.response);
//         //     console.log(result);
//         //     var resultData = result.statusMessage.data;
//         return rest;
//     }).catch((error) => {
//         console.error("Error:", error);
//     });
// }

async function autoGetResponse(searchEmail) {
    showSpinner();
    var emailDataGeenee = {
        url: "https://pgapi-dev.npd.parentgeenee.io/support/users?email="+searchEmail,
        type: "GET",
        data: {},
        postBody: {},
        headers: {
            "x-api-key": "3v6SfxNDkrOHj2qnk1Ax4RVOOeHnBuOPuTNJWqGEPD4PDFLnfpfbK7Ja72y8SUDxtiryEFmRIrMvEnTNOEdULqtC1cyl4SOVYmMi6vDmGz3gAUJLTIOLINr5lGxfwwvJ",
            "Content-Type": "application/json"
        },
        connectionLinkName: "parentgeeneedev",
        responseType: "json"
    };

    try {
        let response = await ZOHODESK.request(emailDataGeenee);
        let rest = typeof response === "string" ? JSON.parse(response) : response;

        return rest; // Properly return the API response
    } catch (error) {
        console.error("API Error:", error);
        throw error; // Propagate the error to the caller
    }
}

window.onload = function () {
    ZOHODESK.extension.onload().then(function (App) {
        ZOHODESK.get('ticket.email').then(function (res) {
					//response Handling
                    // console.log(res[ticket.email]);
                    var ticketEmail=res["ticket.email"];
                    document.getElementById("searchBox").value =ticketEmail;
                    setTimeout(() => {
                    // autoGetResponse(ticketEmail)
                    searchFunction()
                        
                    }, 1000);
                    
				}).catch(function (err) {
					//error Handling
				});
    })
}
function showSpinner() {
    document.getElementById('spinner').style.display = 'block';
}
 
function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
}
function showPopup(type, message) {
    const popup = document.getElementById("popup");
    popup.style.display="block"
    const icon = document.getElementById("popup-icon");
    const text = document.getElementById("popup-message");

    // Set the message
    text.textContent = message;

    // Set the icon and style based on type
    if (type === "success") {
        icon.className = "fas fa-check-circle success"; // Success icon
    } else if (type === "failure") {
        icon.className = "fas fa-times-circle failure"; // Failure icon
    }

    // Show the popup
    popup.classList.remove("hidden");
}

function closePopup() {
    const popup = document.getElementById("popup");
    // popup.classList.add("hidden");
    popup.style.display="none";
}
var sampleResponse1 = {
    "children": [
        {
            "id": "child1",
            "role": [{"basic": "basic", "gold": "gold"},{ "basic": "basic", "gold": "gold"}],
            "name": "john"
        }
    ],
    "parents": [
        {
            "id": "parent1",
            "familyId": "family1",
            "role": "primary",
            "name": "primary_parent_name",
            "email": "primary-dev@xforia.com"
        },
        {
            "id": "parent2",
            "familyId": "family2",
            "role": "manage",
            "name": "secondary_parent_name",
            "email": "secondary-dev@xforia.com"
        }
    ],
    "safeZones": [
        {
            "id": "safezone1",
            "type": "outdoor",
            "name": "zone name",
            "isManagedBySchool": true,
            "outdoorId": "outdoor1",
            "categories": [
                "entertainment",
                "social"
            ],
            "apps": [
                {
                    "id": "app1",
                    "name": "app name",
                    "iosBundleId": "bundleId1",
                    "androidPackageName": "androidPackageName",
                    "category": "social",
                    "domainName": [
                        "domain.com"
                    ],
                    "icon": "icon.png"
                }
            ]
        }
    ],
    "subscription": {
        "features": {
            "key1": "value",
            "key2": "value"
        },
        "plan": [
            "basic",
            "gold"
        ],
        "usedFeatures": {
            "liveLocationTracking": 1,
            "numberOfChildDevices": 2,
            "outdoorSafeZones": 3,
            "defaultRestrictingApps": 0,
            "wishRequests": ""
        }
    },
    "activeWish": [
        {
            "id": "wish_123",
            "appId": 456,
            "appName": "Sample App",
            "userId": "user_789",
            "userName": "John Doe",
            "familyId": "fam_101",
            "spaces": [
                {
                    "id": "space_1",
                    "name": "Living Room",
                    "type": "room"
                }
            ],
            "deviceInfo": {
                "model": "iPhone 12",
                "os": "iOS",
                "version": "14.5"
            },
            "isGranted": true,
            "status": "granted",
            "duration": 3600,
            "expiredAt": "2025-03-01T12:00:00Z",
            "createdAt": "2025-02-24T10:00:00Z",
            "updatedAt": "2025-02-24T10:30:00Z"
        }
    ]
}
var keyLabelMapping = {
    "id": "ID",
    "name": "Name",
    "role": "Role",
    "email": "Email",
    "familyId": "Family ID",
    "category": "Category",
    "domainName": "Domain Name",
    "createdAt": "Created Date",
    "updatedAt": "Updated Date",
    "status": "Status",
    "isGranted": "Granted",
    "duration": "Duration",
    "expiredAt": "Expiration Date",
    "liveLocationTracking": "Live Location Tracking",
    "numberOfChildDevices": "Number of Child Devices",
    "outdoorSafeZones": "Outdoor Safe Zones",
    "defaultRestrictingApps": "Default Restricting Apps",
    "wishRequests": "Wish Requests",
    "plan": "Plan",
    "features": "Features",
    "type": "Type",
    "outdoorId": "Outdoor ID",
    "isManagedBySchool": "Managed by School",
    "apps": "Apps",
    "iosBundleId": "iOS Bundle ID",
    "androidPackageName": "Android Package Name",
    "spaces": "Spaces",
    "deviceInfo": "Device Info",
    "model": "Device Model",
    "os": "Operating System",
    "version": "Version",
    "entertainment": "Entertainment",
    "social": "Social",
    "icon": "Icon",
    "subscription": "Subscription",
    "key": "Key",
    "usedFeatures": "Used Features",
    "appId": "App ID",
    "appName": "App Name",
    "userId": "User ID",
    "userName": "User Name",
    "key1": "Key 1",
    "key2": "Key 2",
    
    // Newly Added Keys from Response
    "children": "Children",
    "safeZones": "Safe Zones",
    "categories": "Categories",
    "activeWish": "Active Wish",
    
    // Subscription features
    "deviceManagement": "Device Management",
    "weightage": "Weightage",
    "blocklistManagement": "Blocklist Management",
    "adultUsers": "Adult Users",
    "rooms": "Rooms",
    "locationNotification": "Location Notification",
    "planName": "Plan Name",
    "appPerLandmark": "Apps per Landmark",
    "landmarks": "Landmarks",
    "childrenManagement": "Children Management",
    "supervision": "Supervision",
    "wishManagement": "Wish Management",
    
    // Used features
    "defaultRestrictingApps": "Default Restricting Apps",
    "wishRequests": "Wish Requests",
    // "liveLocationTracking": "Live Location Tracking",
    
    // Parents
    "parents": "Parents"
};

var valueMapping = {
    "-1": "Unlimited access",
    "0": "Feature is not available"
}
// function children_Fn() {
    
//     for (const [index, zone] of sampleResponse.children.entries()) {
//         console.log(`Processing Children ${index + 1}:`);
    
//         // Loop through each key in the object
//         for (const key in zone) {
//             if (Array.isArray(zone[key])) {
//                 if (zone[key].every(item => typeof item === "object" && item !== null)) {
//                     console.log(`  Key: ${key} contains an array of objects.`);
//                 } else {
//                     console.log(`  Key: ${key} contains an array of values.`);
//                 }
//             } else {
//                 var mainDiv= document.getElementById("childrenData");
//             mainDiv.innerHTML = '';
//                 objectData("childrenData","Children",sampleResponse.children);
//                 console.log(`  Key: ${key} is not an array.`);
//             }
//         }
//     }
    
//     // alert("Children Function Called");
//     // var mainDiv= document.getElementById('childrenData');
//     // mainDiv.innerHTML = '';
//     // for (const [index, item] of sampleResponse.children.entries()) {
//     //     console.log("Index:", index);
//     //     const childDiv = document.createElement('h5');
//     //     childDiv.style.fontSize = 'small';
//     //     if (index!=0) {
//     //         childDiv.className = 'mt-3 headingContent';
//     //         childDiv.innerText = 'Child '+(Number(index)+1);
//     //         mainDiv.appendChild(childDiv);
            
//     //     }else{
//     //     childDiv.className = 'headingContent';
//     //     childDiv.innerText = 'Child '+(Number(index)+1);
//     //     }
//     //     mainDiv.appendChild(childDiv);
//     //     for (const key in item) {
//     //         console.log("Key:", key, "Value:", item[key]);
//     //         const element =item[key];
//     //         console.log(element);
//     //         var labelName="";
//     //         if (key=='id') {
//     //             labelName="Child ID";             
//     //         }
//     //         else if (key=='name') {
//     //             labelName="Child Name";
//     //             }
//     //         else if (key=='role') {
//     //             labelName="Child Role";
//     //             }
           

//     //         const formGroup_1 = document.createElement('div');
//     //         formGroup_1.className = 'row mb-1 g-0';
    
//     //         // Label
//     //         const labelCol_1 = document.createElement('div');
//     //         labelCol_1.className = 'col-sm-3';
//     //         const label_1 = document.createElement('label');
//     //         label_1.className = 'custLabel';
//     //         label_1.innerText = labelName;
//     //         labelCol_1.appendChild(label_1);
    
//     //         // Input/Select
//     //         const inputCol_1 = document.createElement('div');
//     //         inputCol_1.className = 'col-sm-5';
//     //         const input_1 = document.createElement('input');
//     //         input_1.className = 'form-control custInput';
//     //         input_1.id = 'children_'+key+"_"+(Number(index)+1);
//     //         input_1.type = 'text';
//     //         input_1.value =element;
//     //         input_1.disabled = true;
//     //         inputCol_1.appendChild(input_1);
    
//     //         formGroup_1.appendChild(labelCol_1);
//     //         formGroup_1.appendChild(inputCol_1);
//     //         mainDiv.appendChild(formGroup_1);

            
    
           
//     //     }
//     // }
   
 
// }
// function parents_Fn() {
//     var mainDiv= document.getElementById('ParentsData');
//     mainDiv.innerHTML = '';
//     for (const [index, item] of sampleResponse.parents.entries()) {
//         // console.log("Index:", index);
//         const childDiv = document.createElement('h5');
//         childDiv.style.fontSize = 'small';
//         if (index!=0) {
//             childDiv.className = 'mt-3 headingContent';
//             childDiv.innerText = 'Parent '+(Number(index)+1);
//             mainDiv.appendChild(childDiv);
            
//         }else{
//         childDiv.className = 'headingContent';
//         childDiv.innerText = 'Parent '+(Number(index)+1);
//         }
//         mainDiv.appendChild(childDiv);
//         for (const key in item) {
//             // console.log("Key:", key, "Value:", item[key]);
//             const element =item[key];
//             // console.log(element);
//             var labelName="";
//             if (key == 'id') {
//                 labelName = "Parent ID";
//             }
//             else if (key == 'name') {
//                 labelName = "Parent Name";
//             }
//             else if (key == 'role') {
//                 labelName = "Parent Role";
//             }
//             else if (key == 'email') {
//                 labelName = "Parent Email";
//             }
//             else if (key == 'familyId') {
//                 labelName = "Parent Family ID";
//             }
           

//             const formGroup_1 = document.createElement('div');
//             formGroup_1.className = 'row mb-1 g-0';
    
//             // Label
//             const labelCol_1 = document.createElement('div');
//             labelCol_1.className = 'col-sm-3';
//             const label_1 = document.createElement('label');
//             label_1.className = 'custLabel';
//             label_1.innerText = labelName;
//             labelCol_1.appendChild(label_1);
    
//             // Input/Select
//             const inputCol_1 = document.createElement('div');
//             inputCol_1.className = 'col-sm-5';
//             const input_1 = document.createElement('input');
//             input_1.className = 'form-control custInput';
//             input_1.id = 'parent_'+key+"_"+(Number(index)+1);
//             input_1.type = 'text';
//             input_1.value =element;
//             input_1.disabled = true;
//             inputCol_1.appendChild(input_1);
    
//             formGroup_1.appendChild(labelCol_1);
//             formGroup_1.appendChild(inputCol_1);
//             mainDiv.appendChild(formGroup_1);

            
    
           
//         }
//     }
// }
// function safeZones_Fn() {
//     for (const [index, zone] of sampleResponse.safeZones.entries()) {
//         console.log(`Processing SafeZone ${index + 1}:`);
    
//         // Loop through each key in the object
//         for (const key in zone) {
//             if (Array.isArray(zone[key])) {
//                 if (zone[key].every(item => typeof item === "object" && item !== null)) {
//                     console.log(`  Key: ${key} contains an array of objects.`);
//                 } else {
//                     console.log(`  Key: ${key} contains an array of values.`);
//                 }
//             } else {
//                 console.log(`  Key: ${key} is not an array.`);
//             }
//         }
//     }
// }
// function subscription_Fn() {
//     alert("Subscription Function Called");
// }
// function subscription_Fn() {
//     alert("Subscription Function Called");
// }
// function activeWish_Fn() {
//     alert("Active Wish Function Called");
// }

// function repeatData(dataSet){
// console.log(dataSet);
// for (const key in dataSet) {
//     if (Array.isArray(dataSet[key])) {
//         if (dataSet[key].every(item => typeof item === "object" && item !== null)) {
//             // console.log(`  Key: ${key} contains an array of objects.`);
//             console.log("Key:", key);
//             console.log("Value:", dataSet[key]);
//             for (const [index, item] of dataSet[key].entries()) {
//                 console.log(`  Index: ${index}`);
//             const div = document.createElement('h5');
//             div.innerHTML = key+" "+(Number(index)+1);
//             div.style.fontSize = 'small';
//             childrenData.appendChild(div);
//             for (const key1 in item) {
//                 // console.log(`  Key: ${key1} contains an array of objects.`);
//                 // console.log("Value:", item[key1]);
//                 objectData(key,key1,item[key1],index)
//             }
//             // 
//             }
            
//         } else {
//             console.log(`  Key: ${key} contains an array of values.`);
//         }
//     } else {
//         console.log(`  Key: ${key} is not an array.`);
//     }
// }

// }
function isEmpty(value) {
    return Array.isArray(value) ? value.length === 0 : Object.keys(value).length === 0;
}
function children_Fn() {
    var sampleResponse = JSON.parse(document.getElementById("apiData").value);
    var childrenData = document.getElementById("childrenData");
    childrenData.innerHTML = ''; // Clear previous data
    if (isEmpty(sampleResponse.children)) {
        const noData = document.createElement('h5');
        noData.innerText = 'No children data available';
        childrenData.appendChild(noData);
        return;
        
    }
    repeatData({ "Children": sampleResponse.children },childrenData,index2 = 0,"Children",0,0);
    
}
function parents_Fn() {
    var sampleResponse = JSON.parse(document.getElementById("apiData").value);
    var parentsData = document.getElementById("ParentsData");
    parentsData.innerHTML = ''; // Clear previous data
    if (isEmpty(sampleResponse.parents)) {
        const noData = document.createElement('h5');
        noData.innerText = 'No parent data available';
        parentsData.appendChild(noData);
        return;
        
    }
    repeatData({ "Parents": sampleResponse.parents }, parentsData,index2 = 0,"Parents",0,0);
    
}
function safeZones_Fn() {
    var sampleResponse = JSON.parse(document.getElementById("apiData").value);
    var safeZonesData = document.getElementById("safezoneData");
    safeZonesData.innerHTML = ''; // Clear previous data
    if (isEmpty(sampleResponse.safeZones)) {
        const noData = document.createElement('h5');
        noData.innerText = 'No safe zone data available';
        safeZonesData.appendChild(noData);
        return;
        
    }
    repeatData({ "Safe Zones": sampleResponse.safeZones }, safeZonesData,index2 = 0,"Safe_Zones",0,0);
    
}
function subscription_Fn() {
    var sampleResponse = JSON.parse(document.getElementById("apiData").value);
        const subscriptionData = document.getElementById("subscriptionData");
        subscriptionData.innerHTML = ''; // Clear previous data
        if (isEmpty(sampleResponse.subscription)) {
            const noData = document.createElement('h5');
            noData.innerText = 'No subscription data available';
            subscriptionData.appendChild(noData);
            return;
            
        }
        repeatData({ "Subscription": sampleResponse.subscription }, subscriptionData,index2 = 0,"Subscription",0,0);

}
function activeWish_Fn() {
    var sampleResponse = JSON.parse(document.getElementById("apiData").value);
    const activeWishData = document.getElementById("activeWishData");
    activeWishData.innerHTML = ''; // Clear previous data
    if (isEmpty(sampleResponse.activeWish)) {
        const noData = document.createElement('h5');
        noData.innerText = 'No active wish data available';
        activeWishData.appendChild(noData);
        return;
        
    }
    repeatData({ "Active Wish": sampleResponse.activeWish }, activeWishData,index2 = 0,"Active_Wish",0,0);
    
}

function repeatData(dataSet, parentDiv,index2 = 0, mainName,subDivRow,subObDiv) {
    console.log(mainName);

    for (const key in dataSet) {
        if (dataSet.hasOwnProperty(key)) {
            const value = dataSet[key];
            console.log(`Processing ${key}: ${value.length}`);
            

            if (Array.isArray(value)) {
                if (value.every(item => typeof item === "object" && item !== null)) {
                    console.log(`Key: ${key} contains an array of objects.`);
                    if (subDivRow==0 )
                         {
                    value.forEach((item, index) => {
                        const div = document.createElement('h5');
                        div.innerHTML = keyLabelMapping[key] ? `${keyLabelMapping[key]} ${index + 1}` : `${key} ${index + 1}`;
                        div.style.fontSize = 'small';
                        parentDiv.appendChild(div);
                        subDivRow++;
                        repeatData(item, parentDiv,index+1,mainName+"_"+key.replace(" ","_"),subDivRow,subObDiv); // Recursive call
                    });
                }else{
                    createTable(key, value, parentDiv);
                }
                } else {
                    console.log(`Key: ${key} contains an array of values.`);
                    // Store as comma-separated values in a single input field
                    objectData(mainName, key, value.join(", "), index2, parentDiv);
                }
            } else if (typeof value === "object" && value !== null) {
                if (subObDiv==0) {
                    const div = document.createElement('h5');
                        div.innerHTML = keyLabelMapping[key] ? `${keyLabelMapping[key]}` : `${key}`;
                        div.style.fontSize = 'small';
                        parentDiv.appendChild(div);
                        subDivRow++;
                    
                } else {
                    const div = document.createElement('h6');
                    div.innerHTML = (keyLabelMapping[key] ? keyLabelMapping[key] : key) + " :";
                    div.style.fontSize = 'small';
                    div.style.fontWeight = '500';
                    parentDiv.appendChild(div);
                    
                }
                console.log(`Key: ${key} is an object.`);
                repeatData(value, parentDiv,index2,key,subObDiv); // Recursive call
            } else {
                console.log(`Key: ${key} is not an array or object.`);
                objectData(mainName, key, value, index2, parentDiv);
            }
        }
    }
}

function objectData(processName, keyData, valueData, index, parentDiv) {
    const formGroup = document.createElement('div');
    formGroup.className = 'row mb-1 g-0';

    // Label
    const labelCol = document.createElement('div');
    labelCol.className = 'col-sm-3';
    const label = document.createElement('label');
    label.className = 'custLabel';
    label.innerText = keyLabelMapping[keyData] || keyData;
    labelCol.appendChild(label);

    // Input
    const inputCol = document.createElement('div');
    inputCol.className = 'col-sm-5';
    const input = document.createElement('input');
    
    const uniqueIdParts = `${processName}_${keyData}_${index}`.split('_');
    const uniqueId = [...new Set(uniqueIdParts)].join('_'); // Remove duplicate words

    input.id = uniqueId;
    if (typeof valueData === 'boolean') {
        input.type = 'checkbox';
        input.className = 'form-check-input';
        input.checked = valueData;
        console.log("Value Data:", valueData);
        
    } else {
        input.type = 'text';
        input.className = 'form-control custInput';
        if (typeof valueData === 'string' && valueData.includes(":00Z")) {
            input.value = valueData.replace("T", " ").replace(":00Z", "").trim();
        } else {
            if (processName.includes("usedFeatures")&&(keyData =="numberOfChildDevices" ||keyData =="liveLocationTracking"||keyData =="outdoorSafeZones"||keyData =="defaultRestrictingApps"||keyData =="wishRequests")) {
                input.value =valueData;
                
            }else{
            input.value = valueMapping[valueData] || valueData;
            }
        }
    }
    input.disabled = true;
    inputCol.appendChild(input);

    formGroup.appendChild(labelCol);
    formGroup.appendChild(inputCol);

    parentDiv.appendChild(formGroup);
}

function createTable(tableTitle, dataArray, parentDiv) {
    if (dataArray.length === 0) return;

    const tableContainer = document.createElement('div');
    tableContainer.className = 'table-responsive';
    
    const tableTitleElement = document.createElement('h6');
    tableTitleElement.innerText = (keyLabelMapping[tableTitle] || tableTitle) + " :";
    tableTitleElement.style.fontSize = 'small';
    tableTitleElement.style.fontWeight = '500';
    tableTitleElement.style.marginTop = '10px';
    tableContainer.appendChild(tableTitleElement);
    
    const table = document.createElement('table');
    table.className = 'table table-bordered table-hover';
    table.style.fontSize = 'xx-small';
    
    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    const headers = Object.keys(dataArray[0]);
    headers.forEach(header => {
        const th = document.createElement('th');
        th.innerText = keyLabelMapping[header] || header;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create table body
    const tbody = document.createElement('tbody');
    dataArray.forEach(rowData => {
        console.log("Row Data:", rowData);
        
        const row = document.createElement('tr');
        headers.forEach(header => {
            console.log("Header:", header);
            
            const td = document.createElement('td');
            if (Array.isArray(rowData[header])) {
                td.innerText = rowData[header].join(" , ")|| '-';
            }
            else{
                td.innerText = rowData[header]|| '-';
            }
            // td.innerText = rowData[header] || '-';
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    parentDiv.appendChild(tableContainer);
}


function arrayData(mainDiv,paramName,paramData){
    console.log("Param Name:",paramName);
    console.log("Param Data:",paramData);
    console.log("mainDiv:",paramData);

    
    var mainDiv= document.getElementById(mainDiv);
    mainDiv.innerHTML = '';
}
async function searchFunction() {
    var searchIcon=document.getElementById("searchClick");
    const searchValue = document.getElementById("searchBox");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (searchValue.value === "") {
        searchIcon.style.cursor = "pointer";
        searchValue.disabled = false;
        disableButtons()
        // alert("Please enter a search value");
        showPopup('failure', 'Please enter a email address');
        
    }
    else if (!emailRegex.test(searchValue.value)) {
        searchValue.disabled = false;
        disableButtons()
        searchIcon.style.cursor = "pointer";
        // alert("Please enter a search value");
        showPopup('failure', 'Please enter a valid email address');
    }
     else {
        var data=await autoGetResponse(searchValue.value)
        var findData=data.data.statusMessage;
        if(findData.message && findData.message=="User not found"){
            // alert("User not found");
            hideSpinner();
            searchIcon.style.cursor = "pointer";
            showPopup('failure', 'User not found');
            searchValue.style.boxShadow="0 0 5px rgba(0, 0, 0, 0.1)";
            searchValue.disabled = false;
            return;
        }else if(findData.message && findData.message=="querystring must have required property 'email'"){
            hideSpinner();
            searchIcon.style.cursor = "pointer";
            showPopup('failure', findData.message);
            searchValue.style.boxShadow="0 0 5px rgba(0, 0, 0, 0.1)";
            searchValue.disabled = false;
        }else if(findData.message && findData.message=="Error: Plan information not available in the circle"){
            hideSpinner();
            searchIcon.style.cursor = "pointer";
            showPopup('failure', findData.message);
            searchValue.style.boxShadow="0 0 5px rgba(0, 0, 0, 0.1)";
            searchValue.disabled = false;   
        }
        else{
            searchIcon.style.cursor = "not-allowed";
            hideSpinner()
        console.log(findData);
        document.getElementById("apiData").value = JSON.stringify(findData);
        enableButtons();
        searchValue.style.boxShadow="none";
        searchValue.disabled = true;
        children_Fn();
        }
        // children_Fn();
    }
    // children_Fn();
    // Add your search logic here
    // getActiveTab();
}


function getActiveTab(input) {
    const searchValue = document.getElementById("searchBox");
    if (searchValue.value === "") {
        searchValue.disabled = false;
        // alert("Please enter a search value");
       
        showPopup('failure', 'Please enter a your email address in the search box.');
        
    } else {
    var idName=input.id;
    console.log("ID Name:",idName);
    if (idName=="children_Btn") {
        children_Fn();
    } else if (idName=="parent_Btn") {
        parents_Fn();
    } else if (idName=="safezone_Btn") {
        safeZones_Fn();
    } else if (idName=="subscription_Btn") {
        subscription_Fn();
    } else if (idName=="activewish_Btn") {
        activeWish_Fn();
    }
}
}

function enableButtons() {
    document.querySelectorAll("#children_Btn, #parent_Btn, #safezone_Btn, #subscription_Btn, #activewish_Btn")
        .forEach(button => {
            button.style.pointerEvents = "auto"; // Enable click
            button.style.cursor = "pointer"; // Restore default cursor
            // button.disabled = false; // Enable the button
        });
}
function disableButtons() {
    const buttons = document.querySelectorAll("#children_Btn, #parent_Btn, #safezone_Btn, #subscription_Btn, #activewish_Btn");
    buttons.forEach(button => {
        // button.disabled = false;
        button.style.pointerEvents = "none"; // Disable click
        button.style.cursor = "not-allowed"; // Show disabled cursor
    });
}