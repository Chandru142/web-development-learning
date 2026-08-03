let marks = [];

function addMark() {
  let mark = Number(document.getElementById("number").value);

  marks.push(mark);

  document.getElementById("marks").innerText = marks;

  let total = 0;

  marks.forEach((mark) => {
    total = total + mark;
  });

  let average = total / marks.length;

  document.getElementById("average").innerText = average;

  let passed = marks.filter((mark) => {
    return mark >= 50;
  });

  document.getElementById("students").innerText = passed;
}
