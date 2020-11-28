
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
 * jsx-um voncen cikl frum666 
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

* Summary
   * Forms
      * inchi hamar e label teg-y ? -  bari vra click aneluc heto input fokusirovka lini

      * inch kcucadrivi ekranin ?
         <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option slected value="mango">Mango</option>
         </select>

         * vortex karox e petqa gal select tag-y
            https://mimobike.com/en
         * Vortex karox e petqa gal textarea tegy
            https://kinokrad.co/345848-koshki-protiv-sobak-3-lapy-obedinyaytes.html

            * ete uzmum enq arajin hertin cucadrvi Mongo-n inch petqa anel ?

      * vor tegy petqa ogtagorcenq vorpeszi ystananq hetvyal tesqy - https://i.imgur.com/knmUxY8.png.
      * inchi hamar e ogtagorcvum file tegy ?

      * Iche js-um (es6-um)  computed property name - da erb vor key qarakusi pakagceri mej e (vorpeszi key-lini dinamik)
         https://www.google.com/search?q=computed+property+name&rlz=1C1GCEA_enAM854AM854&sxsrf=ALeKk00hmQnJbSQfoSWq8fIF0yZxZmW6Mw:1606236150325&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjFian5z5vtAhUCjosKHRTJDUwQ_AUoAXoECAUQAw&biw=1517&bih=705#imgrc=N4Lm-HxzqYEFiM
      
      * control and uncotrol tags (components)
         * vorpeszi tegy lini karavarvox ayn pardadir petqa lini form tegi mej ?
            * https://d33wubrfki0l68.cloudfront.net/943efcba371cf87a8170b3c49370124d055a5b97/557fa/assets/images/controlled-vs-uncontrolled-cover.png

            WHEN NEED CONTROL COMPONENT
               https://miro.medium.com/max/656/1*qya0oJOdM8nQ0IKJsv7XbQ.gif

---------------------

# home work
tnayin 1 - https://i.imgur.com/kYOhoZB.png
tnayin 2 - https://i.imgur.com/OPtOqc3.png - stexcel hetvyal artaqin tesqy

https://codepen.io/ungkunazmi/pen/YzWOedb

#  Handling Multiple Inputs
   * https://www.google.com/search?q=control+components+react&tbm=isch&ved=2ahUKEwiRk4GB0JvtAhVYLxoKHTdfCToQ2-cCegQIABAA&oq=control+components+react&gs_lcp=CgNpbWcQARgAMgQIABAYOgQIIxAnOgQIABBDOgIIADoFCAAQsQM6BAgAEB46BAgAEBM6CAgAEAUQHhATOgYIABAFEB46BggAEAgQHlDi7Q1Y0K0OYJCvDmgBcAB4AIAB7gGIAa8WkgEGMC4yMS4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=Bji9X5H4GtjeaLe-pdAD&bih=705&biw=1517&rlz=1C1GCEA_enAM854AM854#imgrc=7rQXGLONsQH6IM

     * We will use formik with - codesandbox, but first use withour lib.
      Fully-Fledged Solutions
         Formik, redux-forms, react-hook-forms
# SET_STATE MERGE - setState() automatically merges merges a partial state into the current state.
   * how work merge
      https://www.google.com/search?q=setState()+automatically+merges&rlz=1C1GCEA_enAM854AM854&sxsrf=ALeKk00fB3nZ-A2hIqlx-p2DU466c_KCCw:1606236261143&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiN55Su0JvtAhWMzaQKHQinCIgQ_AUoAnoECAgQBA&biw=1517&bih=705#imgrc=egqRbfddAcgc8M



      ------------------ Lesson 2 ------------------


      home work 1- ystanal hetvyal ardyunqy - https://miro.medium.com/max/656/1*qya0oJOdM8nQ0IKJsv7XbQ.gif