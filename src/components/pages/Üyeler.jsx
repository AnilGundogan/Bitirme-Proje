import React, { useState } from "react";

function Üyeler() {
  
   
   

  return (
    <div>
      <div>
        <section id="page-title" classname="title_bg1 text-light">
          <div >
            <br />
          
            
            <hr />
            <hr />

            <div classname="page-title">
              <h1> MECLİS ÜYELERİ</h1>
            </div>
          </div>
        </section>

        <div classname="container" >
          <div className="row">
            <table classname="table">
              <thead>
                <tr>
                  <th id="name" scope="col">İSİM-SOYİSİM</th>
                  <th scope="col">BAĞLI OLDUĞU PARTİ</th>
                  <th scope="col">GÖREVİ</th>
                  <th scope="col">GÖREVLİ OLDUĞU İLÇE</th>
                </tr>
              </thead>
              <tr>
                <td>ALİNUR AKTAŞ</td>
                <td>AK Parti </td>
                <td>Belediye Başkanı</td>
                <td>BÜYÜKŞEHİR</td>
              </tr>

              <tr>
                <td>MUSTAFA DÜNDAR</td>
                <td>AK Parti</td>
                <td>Belediye Başkanı</td>
                <td>OSMANGAZİ</td>
              </tr>
              <tr>
                <td>OKTAY YILMAZ</td>
                <td>AK Parti</td>
                <td>Belediye Başkanı</td>
                <td>YILDIRIM</td>
              </tr>
              <tr>
                <td>TURGAY ERDEM</td>
                <td>CHP</td>
                <td>Belediye Başkanı</td>
                <td>NİLÜFER</td>
              </tr>
              <tr>
                <td>ALPER TABAN</td>
                <td>AK Parti</td>
                <td>Belediye Başkanı</td>
                <td>İNEGÖL</td>
              </tr>
              <tr>
                <td>MEHMET UĞUR SERTASLAN</td>
                <td>CHP</td>
                <td>Belediye Başkanı</td>
                <td>GEMLİK</td>
              </tr>
              <tr>
                <td>MEHMET KANAR</td>
                <td>AK Parti</td>
                <td>Belediye Başkanı</td>
                <td>MUSTAFAKEMALPAŞA</td>
              </tr>
              <tr>
                <td>HAYRİ TÜRKYILMAZ</td>
                <td>CHP</td>
                <td>Belediye Başkanı</td>
                <td>MUDANYA</td>
              </tr>
              <tr>
                <td>MUSTAFA IŞIK</td>
                <td>AK Parti</td>
                <td>Belediye Başkanı</td>
                <td>GÜRSU</td>
              </tr>
              <tr>
                <td>ALİ ÖZKAN</td>
                <td>AK Parti</td>
                <td>Belediye Başkanı</td>
                <td>KARACABEY</td>
              </tr>
              <tr>
                <td>BEKİR AYDIN</td>
                <td>AK Parti</td>
                <td>Belediye Başkanı</td>
                <td>ORHANGAZİ</td>
              </tr>
              <tr>
                <td>ÖNDER TANIR</td>
                <td>AK Parti</td>
                <td>Belediye Başkanı</td>
                <td>KESTEL</td>
              </tr>
              <tr>
                <td>DAVUT AYDIN</td>
                <td>MHP</td>
                <td>Belediye Başkanı</td>
                <td>YENİŞEHİR</td>
              </tr>
              <tr>
                <td>KAĞAN MEHMET USTA</td>
                <td>AK Parti</td>
                <td>Belediye Başkanı</td>
                <td>İZNİK</td>
              </tr>
              <tr>
                <td>ALİ AYKURT</td>
                <td>AK Parti</td>
                <td>Belediye Başkanı</td>
                <td>ORHANELİ</td>
              </tr>
              <tr>
                <td>MEHMET KESKİN</td>
                <td>AK Parti</td>
                <td>Belediye Başkanı</td>
                <td>KELES</td>
              </tr>
              <tr>
                <td>AHMET KORKMAZ</td>
                <td>AK Parti</td>
                <td>Belediye Başkanı</td>
                <td>BÜYÜKORHAN</td>
              </tr>
              <tr>
                <td>YILMAZ ATAŞ</td>
                <td>AK Parti</td>
                <td>Belediye Başkanı</td>
                <td>HARMANCIK</td>
              </tr>
              <tr>
                <td>HASAN HÜSEYİN ERDÖNMEZ</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>OSMANGAZİ</td>
              </tr>
              <tr>
                <td>TURGAY BÜYÜKOĞLU</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>OSMANGAZİ</td>
              </tr>
              <tr>
                <td>FEYYAZ ALPTUĞ MEMİŞOĞULLARI</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>OSMANGAZİ</td>
              </tr>
              <tr>
                <td>ASLIHAN KÖSE</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>OSMANGAZİ</td>
              </tr>
              <tr>
                <td>SERKAN SAVU</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>OSMANGAZİ</td>
              </tr>
              <tr>
                <td>ABDULLAH ÇALI</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>OSMANGAZİ</td>
              </tr>
              <tr>
                <td>ERCAN KORKMAZ</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>OSMANGAZİ</td>
              </tr>
              <tr>
                <td>AYŞEGÜL SEYRAN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>OSMANGAZİ</td>
              </tr>
              <tr>
                <td>BÜLENT MUMCU</td>
                <td>İYİ Parti</td>
                <td>Meclis Üyesi</td>
                <td>OSMANGAZİ</td>
              </tr>
              <tr>
                <td>İMREN ÇAVUŞOĞLU</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>YILDIRIM</td>
              </tr>
              <tr>
                <td>MUTLU KESKİN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>YILDIRIM</td>
              </tr>
              <tr>
                <td>FERİT GÜRSOY</td>
                <td>Bağımsız</td>
                <td>Meclis Üyesi</td>
                <td>YILDIRIM</td>
              </tr>
              <tr>
                <td>MERVE EKMEKCİ</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>YILDIRIM</td>
              </tr>
              <tr>
                <td>TARIK KÖSE</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>YILDIRIM</td>
              </tr>
              <tr>
                <td>ALİ ÇİFTÇİ</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>YILDIRIM</td>
              </tr>
              <tr>
                <td>MUSTAFA ENGİN KARGILI</td>
                <td>MHP</td>
                <td>Meclis Üyesi</td>
                <td>YILDIRIM</td>
              </tr>
              <tr>
                <td>YAŞAR ELMAS</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>YILDIRIM</td>
              </tr>
              <tr>
                <td>OKTAY ALTUN</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>YILDIRIM</td>
              </tr>
              <tr>
                <td>OSMAN AYRADİLLİ</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>NİLÜFER</td>
              </tr>
              <tr>
                <td>GÖKHAN DİNÇER</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>NİLÜFER</td>
              </tr>
              <tr>
                <td>MURAT EVKE</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>NİLÜFER</td>
              </tr>
              <tr>
                <td>MEHMET TEMİRTAŞ</td>
                <td>İYİ Parti</td>
                <td>Meclis Üyesi</td>
                <td>NİLÜFER</td>
              </tr>
              <tr>
                <td>REMZİ ÇINAR</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>NİLÜFER</td>
              </tr>
              <tr>
                <td>MUHAMMET AYDIN</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>NİLÜFER</td>
              </tr>
              <tr>
                <td>YALÇIN IŞIKYILDIZ</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>NİLÜFER</td>
              </tr>
              <tr>
                <td>TURGAY YEL</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>İNEGÖL</td>
              </tr>
              <tr>
                <td>SELAHATTİN KÜLCÜ</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>İNEGÖL</td>
              </tr>
              <tr>
                <td>HALİDE SERPİL ŞAHİN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>İNEGÖL</td>
              </tr>
              <tr>
                <td>FARUK ADIYAMAN</td>
                <td>MHP</td>
                <td>Meclis Üyesi</td>
                <td>İNEGÖL</td>
              </tr>
              <tr>
                <td>ABDULLAH AKŞEKER</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>İNEGÖL</td>
              </tr>
              <tr>
                <td>AHMET GENÇ</td>
                <td>MHP</td>
                <td>Meclis Üyesi</td>
                <td>İNEGÖL</td>
              </tr>
              <tr>
                <td>RECAİ BAYKAN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>İNEGÖL</td>
              </tr>
              <tr>
                <td>EMİR BİRGÜN</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>GEMLİK</td>
              </tr>
              <tr>
                <td>OĞUZ HANÇER</td>
                <td>İYİ Parti</td>
                <td>Meclis Üyesi</td>
                <td>GEMLİK</td>
              </tr>
              <tr>
                <td>ERCAN BARUTÇUOĞLU</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>GEMLİK</td>
              </tr>
              <tr>
                <td>GALİP GÜR</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>GEMLİK</td>
              </tr>
              <tr>
                <td>OSMAN DURDU</td>
                <td>MHP</td>
                <td>Meclis Üyesi</td>
                <td>GEMLİK</td>
              </tr>
              <tr>
                <td>ARZU KARATAŞ</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>GEMLİK</td>
              </tr>
              <tr>
                <td>SEMİH TÜRKCAN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>MUSTAFAKEMALPAŞA</td>
              </tr>
              <tr>
                <td>LEVENT GÖRGÜN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>MUSTAFAKEMALPAŞA</td>
              </tr>
              <tr>
                <td>AYŞENUR EMRE</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>MUSTAFAKEMALPAŞA</td>
              </tr>
              <tr>
                <td>NURAY LAÇİNER</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>MUSTAFAKEMALPAŞA</td>
              </tr>
              <tr>
                <td>İSA SÖĞÜT</td>
                <td>İYİ Parti</td>
                <td>Meclis Üyesi</td>
                <td>MUSTAFAKEMALPAŞA</td>
              </tr>
              <tr>
                <td>MAHMUT GÖK</td>
                <td>MHP</td>
                <td>Meclis Üyesi</td>
                <td>MUSTAFAKEMALPAŞA</td>
              </tr>
              <tr>
                <td>OZAN EROĞLU</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>MUDANYA</td>
              </tr>
              <tr>
                <td>ERKAN ALTINTAŞ</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>MUDANYA</td>
              </tr>
              <tr>
                <td>ARİF BAYRAK</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>MUDANYA</td>
              </tr>
              <tr>
                <td>CENGİZ TANER</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>MUDANYA</td>
              </tr>
              <tr>
                <td>KADİR KAHRAMAN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>MUDANYA</td>
              </tr>
              <tr>
                <td>İBRAHİM ARSLAN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>GÜRSU</td>
              </tr>
              <tr>
                <td>SAMET USLU</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>GÜRSU</td>
              </tr>
              <tr>
                <td>ELİF UÇAR</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>GÜRSU</td>
              </tr>
              <tr>
                <td>ERSAL KAYA</td>
                <td>İYİ Parti</td>
                <td>Meclis Üyesi</td>
                <td>GÜRSU</td>
              </tr>
              <tr>
                <td>OSMAN AKTAŞ</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>GÜRSU</td>
              </tr>
              <tr>
                <td>MURAT AVİNÇ</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>KARACABEY</td>
              </tr>
              <tr>
                <td>FARUK TÜRE</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>KARACABEY</td>
              </tr>
              <tr>
                <td>ARMAĞAN ELÇİN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>KARACABEY</td>
              </tr>
              <tr>
                <td>GİZEM ARDA</td>
                <td>İYİ Parti</td>
                <td>Meclis Üyesi</td>
                <td>KARACABEY</td>
              </tr>
              <tr>
                <td>ADNAN AKIN</td>
                <td>İYİ Parti</td>
                <td>Meclis Üyesi</td>
                <td>KARACABEY</td>
              </tr>
              <tr>
                <td>İLHAN KILIÇ</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>ORHANGAZİ</td>
              </tr>
              <tr>
                <td>HASAN TURAN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>ORHANGAZİ</td>
              </tr>
              <tr>
                <td>HÜDAYİ DEMİR</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>ORHANGAZİ</td>
              </tr>
              <tr>
                <td>SELAMİ EKEMAN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>ORHANGAZİ</td>
              </tr>
              <tr>
                <td>ERGÜL AYDIN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>ORHANGAZİ</td>
              </tr>
              <tr>
                <td>ALİ ZEYBEK</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>KESTEL</td>
              </tr>
              <tr>
                <td>POLAT AHMET</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>KESTEL</td>
              </tr>
              <tr>
                <td>MEHMET KALPAN</td>
                <td>İYİ Parti</td>
                <td>Meclis Üyesi</td>
                <td>KESTEL</td>
              </tr>
              <tr>
                <td>MUAZZEZ YİĞİT</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>KESTEL</td>
              </tr>
              <tr>
                <td>SELİM YILDIZ</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>KESTEL</td>
              </tr>
              <tr>
                <td>MESUT BEDEL</td>
                <td>MHP</td>
                <td>Meclis Üyesi</td>
                <td>YENİŞEHİR</td>
              </tr>
              <tr>
                <td>KAMİL AYDOĞDU</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>YENİŞEHİR</td>
              </tr>
              <tr>
                <td>HAYRETTİN EMRE YÜRÜK</td>
                <td>MHP</td>
                <td>Meclis Üyesi</td>
                <td>YENİŞEHİR</td>
              </tr>
              <tr>
                <td>SERHAT SAVCI</td>
                <td>MHP</td>
                <td>Meclis Üyesi</td>
                <td>YENİŞEHİR</td>
              </tr>
              <tr>
                <td>AHMET KOÇINALI</td>
                <td>İYİ Parti</td>
                <td>Meclis Üyesi</td>
                <td>YENİŞEHİR</td>
              </tr>
              <tr>
                <td>HALİL ARSLAN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>İZNİK</td>
              </tr>
              <tr>
                <td>HALİL ÇAKIR</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>İZNİK</td>
              </tr>
              <tr>
                <td>ASİYE ÇALIŞKAN</td>
                <td>CHP</td>
                <td>Meclis Üyesi</td>
                <td>İZNİK</td>
              </tr>
              <tr>
                <td>NİHAT ARI</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>ORHANELİ</td>
              </tr>
              <tr>
                <td>CEMİL DEMİR</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>ORHANELİ</td>
              </tr>
              <tr>
                <td>AHMET YAŞAR AKBEY</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>KELES</td>
              </tr>
              <tr>
                <td>ALİ MERSİN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>KELES</td>
              </tr>
              <tr>
                <td>EMİN KOÇDEMİR</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>BÜYÜKORHAN</td>
              </tr>
              <tr>
                <td>SELAMİ SELÇUK TÜRKMEN</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>BÜYÜKORHAN</td>
              </tr>
              <tr>
                <td>ŞABAN FETHİ YILDIZ</td>
                <td>AK Parti</td>
                <td>Meclis Üyesi</td>
                <td>HARMANCIK</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Üyeler;
