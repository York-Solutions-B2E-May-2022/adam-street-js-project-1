let contactList = [];
const formElement = document.getElementById('contact-form');
const contactListElement = document.getElementById('contact-list');

function renderUserList() {
    contactListElement.replaceChildren()
    const stringList = createContactStringList(contactList);
    for (let contactString of stringList) {
        let contactElement = document.createElement('div');
        contactElement.className = 'contact'
        contactElement.innerHTML = contactString
        contactListElement.appendChild(contactElement)
    }
}

if (formElement !== null) {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(formElement)
        const newContact = createContactObj(formData);

        if (validateContactObj(newContact)) {
            contactList = addItem(contactList, newContact);
            renderUserList()
        }
    })
}

function createContactStringList(contactList) {
    let list = [];
    for (let contact of contactList) {
        list.push(
            `
            <h1>Name: ${contact.name}</h1>
            <h2>Birthday: ${contact.birthday}</h2>
            <h3>Age: ${contact.age}</h3>
            `
        )
    }

    return list;
}


function createContactObj(formData) {
    return {
        name: formData.get('name'),
        birthday: formData.get('birthday'),
        age: parseInt(formData.get('age'))
    }
}

function validateContactObj(contact) {
    if (contact.name && contact.birthday && contact.age) {
        return true
    } else {
        return false
    }
}

function addItem(list, item) {
    return [...list, item]
}

function test_addItem_should_add_item_to_array() {
    const list = [1, 2]
    const item = 10
    const expect = [1, 2, 3]

    const result = addItem(list, item);
    if (result.length !== expect.length) {
        console.log('fail')
    }

}

test_addItem_should_add_item_to_array();




























