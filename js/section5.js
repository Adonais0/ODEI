var unitList = ['Stamps School of Art and Design', 'Law School', 'College of Pharmacy', 'College of Literature, Science & the Arts', 'Academic Innovation', 'ADVANCE Program', ' Athletics', 'Bentley Historical Library', 'Business & Finance', 'Ctr for Research on Learning & Teaching', 'Center for the Education of Women', 'Clements Library', 'College of Engineering', 'College of Literature, Science & the Arts', 'College of Pharmacy', 'Confucius Institute', 'Duderstadt Center', 'Division of Public Safety and Security', 'Ford School of Public Policy',
'Graham Sustainability Institute', ' Information and Technology Services','Institute for Social Research', 'Law School',
'Life Sciences Institute', 'Matthaei Botanical Garden & Nichols Arboretum', 'Michigan Medicine', 'Office of Budget and Planning', 'Office of Diversity, Equity, and Inclusion',
'Office of Enrollment Management', 'Office of the President', 'Office of the Provost', ' Office of Research', 'Office of University Development', 'Office of VP & General Counsel', 'Office of VP & Government Relations', 'Michigan Officer Education Programs','Rackham Graduate School', 'School of Dentistry', 'School of Education', 'School of Information', 'School of Kinesiology', 'School of Music, Theatre & Dance', 'School for Environment & Sustainability', ' School of Nursing', 'School of Public Health' , 'School of Social Work', 'Office of the VP & Secretary of the Univ.', 'Stamps School of Art and Design',
 'Stephen M. Ross School of Business', 'Student Life', 'Taubman College of Architecture & Urban Planning', 'University Audits', 'University Library', 'Univ. of Michigan Museum of Art', 'VP of Communications'];

var container = document.getElementById('scroll-container');

for (var i = 0; i < 3; i ++) {
  // create unitGroup
  var unitGroup = document.createElement('div');
  unitGroup.classList.add('group-' + i);
  unitGroup.classList.add('units');

  for (var z = 0; z < 3; z++) {
    var subgroup = document.createElement('div');
    subgroup.classList.add('subgroup-' + z);

    for (var j = 0; j < 6; j++) {
      var li = document.createElement('div');
      var p = document.createElement('p');
      li.classList.add('unit');
      p.innerHTML = unitList[i * 18 + z * 6 + j];
      li.appendChild(p);
      subgroup.appendChild(li);
    }
    unitGroup.appendChild(subgroup);
  }
  container.appendChild(unitGroup);
}

// create another 2 groups that is the same as group-1 to avoid 'jump'

var unitGroup = document.createElement('div');
unitGroup.classList.add('group-3','units');
var count = 3;
for (var i = 0; i < 2; i ++) {
  // create unitGroup
  var unitGroup = document.createElement('div');
  unitGroup.classList.add('group-' + count);
  unitGroup.classList.add('units');

  for (var z = 0; z < 3; z++) {
    var subgroup = document.createElement('div');
    subgroup.classList.add('subgroup-' + z);

    for (var j = 0; j < 6; j++) {
      var li = document.createElement('div');
      var p = document.createElement('p');
      li.classList.add('unit');
      p.innerHTML = unitList[i * 18 + z * 6 + j];
      li.appendChild(p);
      subgroup.appendChild(li);
    }
    unitGroup.appendChild(subgroup);
  }
  container.appendChild(unitGroup);
  count += 1;
}
