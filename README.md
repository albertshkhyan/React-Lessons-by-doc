---
noteId: "5a9152d02e8a11eb96442344981061b0"
tags: []

---


------------------ lesson 9 -----------------------
# aranc nayelu lucel documentaciayi xndirnery (conditonal rendering)
# material ui toggle button (more beautiful)



------------------ lesson 10 -----------------------
list and keys
    * tnayin -  sarqel shaxmati taxtak - https://i.imgur.com/NUcDCWe.png
---------------------------

 ------------------ lesson 11 -----------------------

*SUMMARY
 * qani conditonal renderingi dzev giteq
    &&
    if
    ?
 * jsx-um voncen cikl frum
    map-ov

 * inchi hamar enq cikl fraluc amen elementin talis key attributy
    
 * componenti vra e key- drvum te elemnti ? 
    erkusi vrael key7 drvum e.

 * key - y kara grvi map cikl-ic durs ?
    key-y imast chka grel map-ic durs

 * key - i arjeqy petqa lini unikal te voch ?
    key petqa lini unkial.



# HOME WORK
    * krknel ancacy 

    * https://i.imgur.com/9qEoCDD.png - stanal ays nkari tesqy, bayc warning banner componenty petqa sirun tesq unena (WarningBanner component material ui - um gtnvum), funcionalutyan het miasin.
        Material UI -  Padrasti komponetny sayt e (gradaran e)

    * kardal Form bajin https://reactjs.org/docs/forms.html




 ------------------ lesson 12 -----------------------
 Ampopum
* kareli e map functiayi mej grel map ? - ayo kareli e
* this misht petqa grvi functiayi mej ? - this y miosht petqa grvi funtiayi mej
* jsx-um kareli e grel for ? - che chikareli, petqa ogtagrocel map. (if nuypes chi kareli, miayn toxayin)
* inch e event handler-y ? - funkcia e vory. vory kanchum e react (brazern e kancum event handler-in, ev kancheluc poxancum e argument vory henc event obyektn e)

 * Form
   * incho e tarbervum form-y mnacac tegeric ? - mnacac tegeric tarbervum e nranov vor uni nerqin state.
      - baci formi-ci input teg-y nuynpes uni ira nerqin state-y.
      textarea, select

   * inchpes e iran drsevorum form-i mej grac button-y ? - erb vor form-i mje grac button-i vra click enq anum texi e unenum eji tarmacum.

   * inch e karavarvox komponenty (teg) ev inchi hamar e naxatesvac ? 
      1. vorpesi karavarenq input-i state.   
      2. vorpeszi karaxananq karavarenq user-i koxmic mutqagrac bolor simvolenery.
         vorpeszi tegy (inputy) darna karavarvox iran petqa poxancenq value atriibuty (1 qayl)
   * inche katarvum erb vor input-in talis en value ? - menq chenq karaoxanum poxel input-i mej grac arjeqy.
   <input type="text" value="hello" />

   Vorpeszi input- darna karavoavox menq iran petqa poxancen 2 ban
      value
      onChange evnet
   <input type="text" value="hello" onChange={handleChange}/>
   vorpeszi value karoxananq poxel onChange -i mijocov menq value-in petqa veragrenq
   

   buttona kareli e erku dzevov grel
      1. 
      <input type="button" value="hello" />
      <input type="submit" value="hello" /> - sa ogtagorcvum e erb vor uzum enq serverin tvyal uxakarkenq
      2. <button>hello</button>
      <button type="submit">hello</button>

   * inchpes poxel input-i arjeqy ete nran tvac e value atributy ? - onChange-ov

   * erb e kanchbum onChange eventy ? - erb vor inhc vor simvol enq uzum  mutqagreqenq


   Tanyin
      * stanal nkari tesqy (lesson 11)
      * copy past (mui button and mui warning window)

   





--------------------------- Lesson 1 -------------------
# Home Work
 * Task 1 - https://i.imgur.com/VbhpKmU.png - JSON.stringify() 
 * Task 2 - 
   * https://regexr.com/3e48o  - email validation
* Task 3 - https://i.imgur.com/wc7vaiq.png



--------------------------- Lesson 2 -------------------

* ichpes kanxargelel brauzeri koxmic drvac eventy ? - Event.preventDefault()

* inche handling multiple inputs ev vortex e petq galis ? - da erb vor karavarum enq mi qani input miangamic.

* inch sayt giteq vortex react-i padrasti mijavayr e sarqac ? - https://codesandbox.io/

* inchi hamar e form tegy ? - vorpeszi serverin tvyal uxarkenq. 
   - tegy kam componenty kara lini karavarvox aranc from tegi mej gtnvelu ?

* vorpeszi handl anenq mi qani inputneri dashtery iranc inch petqa tanq ? - amen mi inputin petqa tanq name atributy (voprpeszi handling mulitple inputsy ashtati amen elementin (input) petqa tanq name atributy)


* bolor inputneri harjeqnery  miangamic havaqelu hamar inch event en ogtagorcum ? - onSubmit

 ⚠ onChange miayn mi input e havarqum.
 

* <form onSubmit={this.handlSubmit}>
handleSubmit(e) {
   e.target <- inch kcucadri e.target-y - e.target === form
}
e.target - cuyca talis ayn tegy vori vra drvac e iradarzutyuny

Vorpeszi multiple handling inputs -y astaxti talis enq erku ban
   1. form tegin talis enq onSubmit evnety
   2. form mej gtnvwx tegerin (inputnerin) talis inch name.

* inch gradaranner gideq vory naxatesvac e handling multiple inputs anelu hamar ?
   formik
   redux-form
   react-hook-form






   ----------------lesson 3-------------------

   * nenc anel vor input-i dahstery linen sinxron.
      lracucich - sarqel disabled
      orinak -> https://i.imgur.com/AkaJ4xQ.png
      09 - Forms\form-lessons-2\home-1.html

   * home work - template with material ui - https://material-ui.com/getting-started/templates/sign-in/