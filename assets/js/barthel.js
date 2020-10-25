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
    {score: 0 , desc:""},
    {score: 2 , desc:""},
    {score: 5 , desc:""},
    {score: 8, desc:""},
    {score: 10 , desc:""},
  ]},
  {category:"BOWEL CONTROL",
  rankings:[
    {score: 0 , desc:""},
    {score: 2 , desc:""},
    {score: 5 , desc:""},
    {score: 8, desc:""},
    {score: 10 , desc:""},
  ]},
  {category:"BLADDER CONTROL",
  rankings:[
    {score: 0 , desc:""},
    {score: 2 , desc:""},
    {score: 5 , desc:""},
    {score: 8, desc:""},
    {score: 10 , desc:""},
  ]},
  {category:"BATHING",
  rankings:[
    {score: 0 , desc:""},
    {score: 1 , desc:""},
    {score: 2 , desc:""},
    {score: 3, desc:""},
    {score: 4, desc:""},
    {score: 5 , desc:""},
  ]},
  {category:"DRESSING",
  rankings:[
    {score: 0 , desc:""},
    {score: 2 , desc:""},
    {score: 5 , desc:""},
    {score: 8, desc:""},
    {score: 10 , desc:""},
  ]},
  {category:"PERSONAL HYGIENE",
  rankings:[
    {score: 0 , desc:""},
    {score: 1 , desc:""},
    {score: 2 , desc:""},
    {score: 3, desc:""},
    {score: 4, desc:""},
    {score: 5 , desc:""},
  ]},
  {category:"FEEDING",
  rankings:[
    {score: 0 , desc:""},
    {score: 2 , desc:""},
    {score: 5 , desc:""},
    {score: 8, desc:""},
    {score: 10 , desc:""},
  ]},
];

const evlaulation = 'kdkjd';
let curCategory = 0;
let curScore = 0;
