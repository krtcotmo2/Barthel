const scale = [
  { category:"CHAIR/BED TRANSFERS",
    rankings:[
      {score: 0 , desc:"Unable to participate in a transfer. Two attendants are required to transfer the patient with or without a mechanical device."},
      {score: 3 , desc:"Able to participate but maximum assistance of one other person is require in all aspects of the transfer."},
      {score: 8 , desc:"The transfer requires the assistance of one other person. Assistance may be required in any aspect of the transfer."},
      {score: 12 , desc:"The presence of another person is required either as a confidence measure, or to provide supervision for safety."},
      {score: 15 , desc:"The patient can safely approach the bed walking or in a wheelchair, lock brakes, lift footrests, or position walking aid, move safely to bed,lie down, come to a sitting position on the side of the bed, change the position of the wheelchair, transfer back into it safely and/or grasp aid and stand. The patient must be independent in all phases of this activity."}
    ]
  },
  {category:"AMBULATION",
    rankings:[
      {score: 0 , desc:"Dependent in ambulation."},
      {score: 3 , desc:"Constant presence of one or more assistant is required during ambulation."},
      {score: 8 , desc:"Assistance is required with reaching aids and/or their manipulation. One person is required to offer assistance."},
      {score: 12, desc:"The patient is independent in ambulation but unable to walk 50 metres without help, or supervision is needed for confidence or safety in hazardous situations"},
      {score: 15 , desc:"The patient must be able to wear braces if required, lock and unlock these braces assume standing position, sit down, and place the necessary aids into position for use. The patient must be able to crutches, canes, or a walkarette, and walk 50 metres without help or supervision."},
    ]
  },
  {category:"AMBULATION WHEELCHAIR",
    rankings:[
      {score: 1 , desc:"Dependent in wheelchair ambulation."},
      {score: 2 , desc:"Patient can propel self short distances on flat surface, but assistance is required for other steps of wheelchair management."},
      {score: 3 , desc:"Presence of one person is necessary and constant assistance is required to manipulate chair to table, bed, etc."},
      {score: 4, desc:"The patient can propel self for a reasonable duration over regularly encountered terrain. Minimal assistance may still be required in “tight corners” or to negotiate a kerb 100mm high."},
      {score: 5 , desc:"To propel wheelchair independently, the patient must be able to go around corners, turn around, manoeuvre the chair to a table, bed, toilet, etc. The patient must be able to push a chair at least 50 metres and negotiate a kerb."},
    ]
  },
  {category:"STAIR CLIMBING",
    rankings:[
      {score: 0 , desc:"The patient is unable to climb stairs."},
      {score: 2 , desc:"Assistance is required in all aspects of chair climbing, including assistance with walking aids."},
      {score: 5 , desc:"The patient is able to ascend/descend but is unable to carry walking aids and needs supervision and assistance."},
      {score: 8, desc:"Generally no assistance is required. At times supervision is required for safety due to morning stiffness, shortness of breath, etc."},
      {score: 10 , desc:"The patient is able to go up and down a flight of stairs safely without help or supervision. The patient is able to use hand rails, cane or crutches when needed and is able to carry these devices as he/she ascends or descends."},
  ]},
  {category:"TOILET TRANSFERS",
    rankings:[
      {score: 0 , desc:"Fully dependent in toileting."},
      {score: 2 , desc:"Assistance required in all aspects of toileting."},
      {score: 5 , desc:"Assistance may be required with management of clothing, transferring, or washing hands."},
      {score: 8, desc:"Supervision may be required for safety with normal toilet. A commode may be used at night but assistance is required for emptying and cleaning."},
      {score: 10 , desc:"The patient is able to get on/off the toilet, fasten clothing and use toilet paper without help. If necessary, the patient may use a bed pan or commode or urinal at night, but must be able to empty it and clean it."},
  ]},
  {category:"BOWEL CONTROL",
    rankings:[
      {score: 0 , desc:"The patient is bowel incontinent."},
      {score: 2 , desc:"The patient needs help to assume appropriate position, and with bowel movement facilitatory techniques."},
      {score: 5 , desc:"The patient can assume appropriate position, but cannot use facilitatory techniques or clean self without assistance and has frequent accidents. Assistance is required with incontinence aids such as pad, etc."},
      {score: 8, desc:"The patient may require supervision with the use of suppository or enema and has occasional accidents."},
      {score: 10 , desc:"The patient can control bowels and has no accidents, can use suppository, or take an enema when necessary."},
  ]},
  {category:"BLADDER CONTROL",
    rankings:[
      {score: 0 , desc:"The patient is dependent in bladder management, is incontinent, or has indwelling catheter."},
      {score: 2 , desc:"The patient is incontinent but is able to assist with the application of an internal or external device."},
      {score: 5 , desc:"The patient is generally dry by day, but not at night and needs some assistance with the devices."},
      {score: 8, desc:"The patient is generally dry by day and night, but may have an occasional accident or need minimal assistance with internal or external devices"},
      {score: 10 , desc:"The patient is able to control bladder day and night, and/or is independent with internal or external devices."},
  ]},
  {category:"BATHING",
    rankings:[
      {score: 0 , desc:"Total dependence in bathing self."},
      {score: 1 , desc:"Assistance is required in all aspects of bathing, but patient is able to make some contribution."},
      {score: 3 , desc:"Assistance is required with either transfer to shower/bath or with washing or drying; including inability to complete a task because of condition or disease, etc."},
      {score: 4, desc:"Supervision is required for safety in adjusting the water temperature, or in the transfer."},
      {score: 5, desc:"The patient may use a bathtub, a shower, or take a complete sponge bath. The patient must be able to do all the steps of whichever method is employed without another person being present"},
  ]},
  {category:"DRESSING",
    rankings:[
      {score: 0 , desc:"The patient is dependent in all aspects of dressing and is unable to participate in the activity."},
      {score: 2 , desc:"The patient is able to participate to some degree, but is dependent in all aspects of dressing."},
      {score: 5 , desc:"Assistance is needed in putting on, and/or removing any clothing."},
      {score: 8, desc:"Only minimal assistance is required with fastening clothing such as buttons, zips, bra, shoes, etc."},
      {score: 10 , desc:"The patient is able to put on, remove, corset, braces, as prescribed."},
  ]},
  {category:"PERSONAL HYGIENE",
    rankings:[
      {score: 0 , desc:"The patient is unable to attend to personal hygiene and is dependent in all aspects."},
      {score: 1 , desc:"Assistance is required in all steps of personal hygiene, but patient able to make some contribution."},
      {score: 3 , desc:"Some assistance is required in one or more steps of personal hygiene"},
      {score: 4, desc:"Patient is able to conduct his/her own personal hygiene but requires minimal assistance before and/or after the operation."},
      {score: 5, desc:"The patient can wash his/her hands and face, comb hair, clean teeth and shave. A male patient may use any kind of razor but must insert the blade, or plug in the razor without help, as well as retrieve it from the drawer or cabinet. A female patient must apply her own make-up, if used, but need not braid or style her hair"},
  ]},
  {category:"FEEDING",
    rankings:[
      {score: 0 , desc:"Dependent in all aspects and needs to be fed, nasogastric needs to be administered."},
      {score: 2 , desc:"Can manipulate an eating device, usually a spoon, but someone must provide active assistance during the meal."},
      {score: 5 , desc:'Able to feed self with supervision. Assistance is required with associated tasks such as putting milk/sugar into tea, salt, pepper, spreading butter, turning a plate or other "set up" activities.'},
      {score: 8, desc:"Independence in feeding with prepared tray, except may need meat cut, milk carton opened or jar lid etc. The presence of another person is not required."},
      {score: 10 , desc:"The patient can feed self from a tray or table when someone puts the food within reach. The patient must put on an assistive device if needed, cut food, and if desired use salt and pepper, spread butter, etc."},
  ]},
];

const evlaulation = 'kdkjd';
let curCategory = 0;
let curScore = 0;
