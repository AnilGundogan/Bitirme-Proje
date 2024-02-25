import React from "react";



function KullanıcıGirişi() {
  return (
    <>
    <div classname="container-fluid" style={{border:"10px solid", textAlign:"center", margin:"10px", padding:"10px"}}>
    <div classname="input-group mb-3">
  <span classname="input-group-text" id="basic-addon1">Kullanıcı Adı : </span>
  <input type="text" classname="form-control" placeholder="Kullanıcı Adı" aria-label="Username" aria-describedby="basic-addon1"/>
</div>



<div classname="mb-3">
  
  <div classname="input-group">
    <span classname="input-group-text" id="basic-addon3">Mail Adresi : </span>
    <input type="text" classname="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
  </div>
  
</div>

<div classname="input-group mb-3">
  <span classname="input-group-text">Parola : </span>
  <input type="text" classname="form-control" aria-label="Amount (to the nearest dollar)"/>
  
</div>

<div classname="input-group mb-3">
  <input type="text" classname="form-control" placeholder="Mesleğiniz" aria-label="Username"/>
  
  <input type="text" classname="form-control" placeholder="Ünvanınız" aria-label="Server"/>
</div>

<div classname="input-group">
  <span classname="input-group-text">Açıklama : </span>
  <textarea classname="form-control" aria-label="With textarea"></textarea>
</div>
<button class="btn btn-primary" type="submit">Giriş Yap</button>
</div>
</>
  );
}

export default KullanıcıGirişi;
