let tbody = document.getElementById('tbody');

fetch("http://localhost:3000/vasarlo")
    .then(res => res.json())
    .then(json => {
        json.map(adat=>{
            tbody.append(td_fun(adat.id,adat.name,adat.rendelesdatum,adat.cim,adat.type,adat.menyiseg));
        })
    })

    function td_fun(id, name, rendelesdatum,cim, type, menyiseg){
        let td = document.createElement('tr');
        td.innerHTML = 
        `
        <td class="id">${id}</td>
        <td>
            <div class="name">${name}</div>
        </td>
        <td>
            <div class="rendelesdatum">${rendelesdatum}</div>
        </td>
        <td>
            <div class="cim">${cim}</div>
        </td>
        <td>
            <div class="type">${type}</div>
        </td>
        <td>
            <div class="menyiseg">${menyiseg}</div>
        </td>
            
        `
        return td;
    }

    function createAndUpdateUser(){
        var inputid = document.getElementById('inputid').value;
        var inputname = document.getElementById('inputname').value;
        var inputrendelesdatum = document.getElementById('inputrendelesdatum').value;
        var inputcim = document.getElementById('inputcim').value;
        var inputtype = document.getElementById('inputtype').value;
        var inputmenyiseg = document.getElementById('inputmenyiseg').value;
        
    
    }    