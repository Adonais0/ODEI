var unitList = ['Academic Innovation', 'ADVANCE Program', ' Athletics', 'Bentley Historical Library', 'Business & Finance', 'Ctr for Research on Learning & Teaching', 'Center for the Education of Women', 'Clements Library', 'College of Engineering', 'College of Literature, Science & the Arts', 'College of Pharmacy', 'Confucius Institute', 'Duderstadt Center', 'Division of Public Safety and Security', 'Ford School of Public Policy', 'Graham Sustainability Institute', ' Information and Technology Services', 'Institute for Social Research', 'Law School',
 'Life Sciences Institute', 'Matthaei Botanical Garden & Nichols Arboretum', 'Michigan Medicine', 'Office of Budget and Planning', 'Office of Diversity, Equity, and Inclusion',
'Office of Enrollment Management', 'Office of the President', 'Office of the Provost', ' Office of Research', 'Office of University Development', 'Office of VP & General Counsel', 'Office of VP & Government Relations', 'Michigan Officer Education Programs','Rackham Graduate School', 'School of Dentistry', 'School of Education', 'School of Information', 'School of Kinesiology', 'School of Music, Theatre & Dance', 'School for Environment & Sustainability', ' School of Nursing', 'School of Public Health' , 'School of Social Work', 'Office of the VP & Secretary of the Univ.', 'Stamps School of Art and Design',
 'Stephen M. Ross School of Business', 'Student Life', 'Taubman College of Architecture & Urban Planning', 'University Audits', 'University Library', 'Univ. of Michigan Museum of Art', 'VP of Communications'];


var unitGroup = document.getElementById('unit-group');


for (var i = 0; i < 15; i ++) {
  var li = document.createElement('div');
  li.classList.add('unit');
  li.innerHTML = unitList[i];
  unitGroup.appendChild(li);
  if (unitList[i].length > 20) {
    console.log(unitList[i]);
    li.style.fontSize = '70%';
    li.lineHight = '100%';
  }
}
