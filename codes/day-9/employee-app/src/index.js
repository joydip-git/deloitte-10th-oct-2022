if (employees.length > 0) {
    document.getElementById('tblDiv').hidden = false
} else {
    document.getElementById('tblDiv').hidden = true
}
function createOption(val, txt) {
    var optionElement = document.createElement('option')
    if (val)
        optionElement.value = val

    optionElement.text = txt
    return optionElement
}
function loadProjects() {
    var projectsSelect = document.getElementById('ddlProjs')
    for (const project of projects) {
        var projOption = createOption(project.id, project.name)
        projectsSelect.appendChild(projOption)
    }
}
function loadDepartments() {
    var departmentsSelect = document.getElementById('ddlDepts')
    for (const dept of departments) {
        var deptOption = createOption(dept.id, dept.name)
        departmentsSelect.appendChild(deptOption)
    }
}
function loadLocations() {
    var locationsSelect = document.getElementById('ddlLocs')
    for (const loc of locations) {
        var locOption = createOption(loc.id, loc.name)
        locationsSelect.appendChild(locOption)
    }
}
loadProjects()
loadDepartments()
loadLocations()


function getSelectOptionText(controlId) {
    var ddl = document.getElementById(controlId)
    var selectedOption = ddl.options[ddl.selectedIndex]
    var selectedText = selectedOption.text
    return selectedText
}
function createNewTableData(tdValue) {
    var td = document.createElement('td')
    td.innerText = tdValue
    return td
}
function createNewRow(e) {
    var newRow = document.createElement('tr')
    newRow.append(
        createNewTableData(e.name),
        createNewTableData(e.departmentName),
        createNewTableData(e.projectName),
        createNewTableData(e.location)
    )
    newRow.classList.add('table-dark')
    document.getElementById('tblBody').appendChild(newRow)
}
function addEmployee() {
    var name, dept, proj, loc
    name = document.getElementById('txtName').value

    dept = getSelectOptionText('ddlDepts')
    proj = getSelectOptionText('ddlProjs')
    loc = getSelectOptionText('ddlLocs')

    var newId = 1
    //var insertIndex = 0
    if (employees.length > 0) {
        var last = employees[employees.length - 1]
        newId = last + 1
        //insertIndex = employees.length
    }
    var newEmployee = {
        id: newId,
        name: name,
        departmentName: dept,
        projectName: proj,
        location: loc
    }
    employees.push(newEmployee)
    //employees[insertIndex] = newEmployee
    createNewRow(newEmployee)
    if (document.getElementById('tblDiv').hidden) {
        document.getElementById('tblDiv').hidden = false
    }
    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}
