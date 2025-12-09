// 1. Dynamic List (Daftar Dinamis)
function tambahItem() {
    const input = document.getElementById('itemInput');
    const list = document.getElementById('dynamicList');
    
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = '';
    } else {
        alert('Mohon masukkan item terlebih dahulu!');
    }
}

function hapusItem() {
    const list = document.getElementById('dynamicList');
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    } else {
        alert('Tidak ada item untuk dihapus!');
    }
}

// 2. Ubah Warna Background Secara Dinamis
function ubahWarna(warna) {
    document.body.style.backgroundColor = warna;
}

// 3. Counter dengan DOM Manipulation
let counter = 0;

function tambahCounter() {
    counter++;
    updateCounter();
}

function kurangCounter() {
    counter--;
    updateCounter();
}

function resetCounter() {
    counter = 0;
    updateCounter();
}

function updateCounter() {
    document.getElementById('counterValue').innerText = counter;
}

// 4. Toggle Show/Hide Element
function toggleParagraph() {
    const paragraph = document.getElementById('toggleText');
    paragraph.classList.toggle('hidden');
}