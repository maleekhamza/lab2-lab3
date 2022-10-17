/** @format */

let books = [
	{ id: 1, titre: 'titre 1', auteur: 'auteur 1', prix: 40.5 },
	{ id: 2, titre: 'titre 2', auteur: 'auteur 2', prix: 60.5 },
	{ id: 3, titre: 'titre 3', auteur: 'auteur 3', prix: 80.0 },
];

function showFormRegister() {
	document.getElementById('frm').style.display = 'inline';
}

function formDataSubmt() {
	books = ReadFormData();
}

function ReadFormData() {
	books.id['id'] = document.getElementById('id').value;
	books.titre['titre'] = document.getElementById('titre').value;
	books.auteur['auteur'] = document.getElementById('auteur').value;
	books.prix['prix'] = document.getElementById('prix').value;
	return books;
}


function ajouterLivre() {
	let id = books.length;
	books[id] = {
		id: id + 1,
		titre: document.getElementById('titre').value,
		auteur: document.getElementById('auteur').value,
		prix: document.getElementById('prix').value,
	};
	document.querySelector('tbody').innerHTML =document.getElementById('frm').value;
	showbookslist();
	document.getElementById('frm').style.display = 'none';
}


function updateRecord() {

	selectedRow.cells[0].innerHTML = document.getElementById('idd').value;
	selectedRow.cells[1].innerHTML = document.getElementById('titree').value;
	selectedRow.cells[2].innerHTML = document.getElementById('auteurr').value;
	selectedRow.cells[3].innerHTML = document.getElementById('prixx').value;
	document.getElementById('edit').style.display = 'none';
	
}
function onDelete(td) {
	if (confirm('Are you sure to delete this record ?')) {
		row = td.parentElement.parentElement;
		document.getElementById('booksList').deleteRow(row.rowIndex);
	}
}
function showFormRegisteer(td) {
    selectedRow = td.parentElement.parentElement;
	document.getElementById('edit').style.display = 'inline';

	document.getElementById('idd').value = selectedRow.cells[0].innerHTML;
	document.getElementById('titree').value = selectedRow.cells[1].innerHTML;
	document.getElementById('auteurr').value = selectedRow.cells[2].innerHTML;
	document.getElementById('prixx').value = selectedRow.cells[3].innerHTML;
}
function showbookslist() {
	let ligne = '';
	books.forEach((book) => {
		ligne += '<tr>';
		ligne += '<td>' + book.id + '</td>';
		ligne += `<td> ${book.titre} </td>`;
		ligne += `<td> ${book.auteur} </td>`;
		ligne += `<td> ${book.prix} </td>`;
		ligne += `<td scope="col"> <button class="btn btn-warning"  onclick="showFormRegisteer(this)" > Editer </button></td>`;
		ligne += `<td scope="col"> <button class="btn btn-danger "  onClick="onDelete(this)" > Delete </button></td>`;
		ligne += '</tr>';
	});
	document.querySelector('tbody').innerHTML = ligne;
}


window.addEventListener('load', showbookslist);
