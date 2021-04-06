const a = () =>{
    var Student = {
        name : "Muzammal",
        class : "Web and Mobile",
        Roll_No : "17977"
    }
    document.getElementById('1').innerHTML = `Name of Student: ${Student.name} <br> Class of Student: ${Student.class} <br> Roll No of Student: ${Student.Roll_No} `
}
const b = () =>{
    var Student = {
        name : "Muzammal",
        class : "Web and Mobile",
        Roll_No : "17977"
    }
    delete Student.Roll_No
    document.getElementById('2').innerHTML = `Name of Student: ${Student.name} <br> Class of Student: ${Student.class} <br> Roll No of Student: ${Student.Roll_No} `
}
const c = () =>{
    var Student = {
        name : "Muzammal",
        class : "Web and Mobile",
        Roll_No : "17977"
    }
    var a = Object.keys(Student).length
    document.getElementById('3').innerHTML =`The length of object is : ${a}`
}
const d =() =>{
    var library = [ 
           {
               author: 'Bill Gates',
               title: 'The Road Ahead',
               readingStatus: true
           },
           {
               author: 'Steve Jobs',
               title: 'Walter Isaacson',
               readingStatus: true
           },
           {
               author: 'Suzanne Collins',
               title:  'Mockingjay: The Final Book of The Hunger Games', 
               readingStatus: false
           }];
            var name = library[0].title
            var author = library[0].author
            var status = library[0].readingStatus
            document.getElementById('4').innerHTML = `Book Name is:<b> ${name}</b> <br> Writer Name is: <b>${author}</b> <br> Reading status is :<b> ${status}</b> ` 
            var name = library[1].title
            var author = library[1].author
            var status = library[1].readingStatus
            document.getElementById('4.').innerHTML = `Book Name is:<b> ${name}</b> <br> Writer Name is: <b>${author}</b> <br> Reading status is :<b> ${status}</b> `
            var name = library[2].title
            var author = library[2].author
            var status = library[2].readingStatus
            document.getElementById('4..').innerHTML = `Book Name is:<b> ${name}</b> <br> Writer Name is: <b>${author}</b> <br> Reading status is :<b> ${status}</b> `
}
const e = () =>{
    var a = parseInt(document.getElementById('5').value)
    var b = parseInt(document.getElementById('5.').value)
    var cylinder = {
        radius: a ,
        hight: b
    }
    var Volume = Math.PI * 2 * cylinder.radius * cylinder.hight
    var a = Volume.toFixed(4)
    document.getElementById('5..').innerHTML = `Volume of cylinder ${a}`

}
const f = () =>{
    var a = document.getElementById('6').value
    var b = a.split(' ')
    var c = b.length
    var swapp
    do {
        swapp = false
        for(let i = 0; i < c;i++)
        {
            if(b[i] > b[i+1]) 
            {
                var temp = b[i]
                b[i] = b[i+1]
                b[i+1] = temp
                swapp = true
            }
        }
    } while (swapp);
    document.getElementById('6.').innerHTML = `[${b}]`

}
const g = ()  =>{
    var a = document.getElementById('7').value
  var array1 = [];
    for (var x = 0,y=1; x < a.length; x++,y++) 
    {
     array1[x]=a.substring(x, y);
      }
  var combi = [];
  var temp= "";
  var slent = Math.pow(2, array1.length);
  
  for (var i = 0; i < slent ; i++)
  {
      temp= "";
      for (var j=0;j<array1.length;j++) {
          if ((i & Math.pow(2,j))){ 
              temp += array1[j];
          }
      }
      if (temp !== "")
      {
          combi.push(temp);
      }
  }
    document.getElementById('7.').innerHTML = `[${combi}]`
  }

  
      
const h = () =>{
    var date = new Date(); 
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("8").innerText = hour + " : " + min + " : " + sec; 
    setTimeout(function(){ h() }, 1000);
    }

    const updateTime =(a) => {
        if (a < 10) {
        return "0" + a;
     }
    else {
        return a;
    }
}

const i = () =>{
    var a = document.getElementById('9').value
    var area = Math.PI*a*a
    var perimeter = 2*Math.PI*a
    var c = area.toFixed(2)
    var d = perimeter.toFixed(2)
    document.getElementById('9.').innerHTML = `The area of the circle is : ${c}<br>The  perimeter of the circle is ${d}`
}


const k = () =>{
    function all_properties(obj) 
    {
        return Object.getOwnPropertyNames(obj);
    }
    var a = all_properties(Array)
    document.getElementById('11').innerHTML = `[${a}]`
}

const ad = () =>{
    var is_date = function(input) {
        if ( Object.prototype.toString.call(input) === "[object Date]" ) 
          return true;
        return false;   
          };
      
      console.log(is_date("October 13, 2014 11:13:00"));
      console.log(is_date(new Date(86400000)));
      console.log(is_date(new Date(9999,5,24,11,33,30,0)));
      console.log(is_date([1, 2, 4, 0]));
      document.getElementById('1d').innerHTML =`See the result in console`
}
const bd = () =>{
    var a = new Date
    var dd = a.getDay()
    var mm = a.getMonth()
    var yyyy = a.getFullYear()
    if(mm < 10){
        var b = `0${mm}`
    }
    if(dd < 10){
        var c = `0${mm}`
    }
    document.getElementById('2d').innerHTML = `${c} - ${b} - ${yyyy}`
}

const cd = () =>{
    var a = parseInt(document.getElementById('3d').value)
    var b = parseInt(document.getElementById('3d.').value)
    var c = new Date(b , a , 0).getDate()
    document.getElementById('3d..').innerHTML = c
}
const dd = () =>{
    var a = document.getElementById('4d..').value
    var b = document.getElementById('4d').value
    var c = document.getElementById('4d.').value
    var months = [ "","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
    var d = months[new Date(a,b,c).getMonth()]
    document.getElementById('4d...').innerHTML = d
}

const fd =()=>{
    var a = document.getElementById('III').value
    var b = document.getElementById('I').value
    var c = document.getElementById('II').value
    var a2 = document.getElementById('VI').value
    var b2 = document.getElementById('IV').value
    var c2 = document.getElementById('V').value
    var d = new Date(a,b,c)
    var f = new Date(a2,b2,c2)
    if(d > f){
        document.getElementById('5d').innerHTML = `The first date is Greater then second`
    }else
    if( d < f){
        document.getElementById('5d').innerHTML = `The second date is Greater then first` 
    }else
    {
        document.getElementById('5d').innerHTML = `Both dates are Equal` 
    }
}

const gd = () =>{
    var a = document.getElementById('6d').value
    var b = new Date
    var c = new Date(b.getTime() + a*60000)
    var d = c.toString()
    document.getElementById('6d.').innerHTML = d
}

const hd = () =>{
    var a = document.getElementById('7d..').value
    var b = document.getElementById('7d').value
    var c = document.getElementById('7d.').value
    var d = new Date(a,b,c)
    var f =d.getDay()
    if( f == 0 || f == 6){
        document.getElementById('7d...').innerHTML = `Weekend`
    }else
    {
        document.getElementById('7d...').innerHTML = `Not Weekend` 
    }
}

const idd = () =>{
    var a = document.getElementById('IIId').value
    var b = document.getElementById('Id').value
    var c = document.getElementById('IId').value
    var a2 = document.getElementById('VId').value
    var b2 = document.getElementById('IVd').value
    var c2 = document.getElementById('Vd').value    
    var d = new Date(a,b,c)
    var f = new Date(a2,b2,c2)
    var g = Math.floor((Date.UTC(f.getFullYear(), f.getMonth(), f.getDate()) - Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) ) /(1000 * 60 * 60 * 24))
    document.getElementById('8d').innerHTML= g
}

const jd = () =>{
    var a = document.getElementById('9d.').value
    var b = document.getElementById('9d').value
    var c = new Date( a ,b ,0).getDate()
    document.getElementById('9d..').innerHTML = c
}

const yester = () =>{
    var a = document.getElementById('10d..').value
    var b = document.getElementById('10d').value
    var c = document.getElementById('10d.').value
    var dt = new Date(a,b,c)
    var e = new Date(dt.setDate(dt.getDate()-1)).toString();
    document.getElementById('10d...').innerHTML = e
}

const maxi = () =>{
    var all_dt = ['2015/02/01', '2015/02/02', '2015/01/03']
    var max_dt = all_dt[0]
    max_dtObj = new Date (all_dt[0])
    all_dt.forEach(function(dt,index)
    {
        if(new Date(dt) > max_dtObj){
            max_dt = dt
            max_dtObj = new Date(dt)
        }
    }
    )
    document.getElementById('11d').innerHTML = max_dt
}
const mini = () =>{
    var all_dt = ['2015/02/01', '2015/02/02', '2015/01/03']
    var min_dt = all_dt[0]
    min_dtObj = new Date (all_dt[0])
    all_dt.forEach(function(dt,index)
    {
        if(new Date(dt) < min_dtObj){
            min_dt = dt
            min_dtObj = new Date(dt)
        }
    }
    )
    document.getElementById('12d').innerHTML = min_dt
}
const md = () =>{
    var a = document.getElementById('13d').value
    var hour = a/60
    var hours = Math.floor(hour)
    var minute = (hour-hours)*60
    var minutes = Math.round(minute)
    document.getElementById('13d.').innerHTML = `${a} has ${hours} hours and ${minutes} minutes`
}

const nd =() =>{
    var a =document.getElementById('14d').value
    if(a%4==0){
        document.getElementById('14d.').innerHTML = `The year ${a} has 366 days`  
    }else{
        document.getElementById('14d.').innerHTML = `The year ${a} has 365 days`  
    }
}

const od = () =>{
    var a = document.getElementById('15d..').value
    var b = document.getElementById('15d').value
    var c = document.getElementById('15d.').value
    var dt = new Date(a,b,c) 
    var month = dt.getMonth() + 1
    var d = Math.ceil(month/3)
    document.getElementById('15d...').innerHTML = d
}

const pd = () =>{
    var a = document.getElementById('16d..').value
    var b = document.getElementById('16d').value
    var c = document.getElementById('16d.').value
    var dt = new Date(a,b,c) 
    var current = new Date (dt)
    var previous = new Date (dt.getFullYear(),0,1)
    var d = Math.ceil((current-previous+1)/ 86400000)
    document.getElementById('16d...').innerHTML = d
}

const qd = () =>{
    var t = document.getElementById('17d').value
    var dt = new Date(t*1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    var time = hr+ ':' + m.substr(-2) + ':' + s.substr(-2);
    document.getElementById('17d.').innerHTML = time
}
const rd=()=>{
    var a = document.getElementById('18d..').value
    var b = document.getElementById('18d').value
    var c = document.getElementById('18d.').value
    var dob = new Date(a,b,c) 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    var d = Math.abs(age_dt.getUTCFullYear() - 1970);
    document.getElementById('18d...').innerHTML=d
}

const sd = () =>{
    var a = document.getElementById('19d..').value
    var b = document.getElementById('19d').value
    var c = document.getElementById('19d.').value
    var dt = new Date(a,b,c) 
    var d = (dt.getDate()< 10 ? '0' : '') + dt.getDate()
    document.getElementById('19d...').innerHTML = d
}

const td = () =>{
    var a = document.getElementById('20d..').value
    var b = document.getElementById('20d').value
    var c = document.getElementById('20d.').value
    var dt = new Date(a,b,c)
    var d = dt.getDay()
    var days =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    var e = days[d]
    document.getElementById('20d...').innerHTML=e
}
const ud =() =>{
    var a = document.getElementById('21d..').value
    var b = document.getElementById('21d').value
    var c = document.getElementById('21d.').value
    var dt = new Date(a,b,c)
    var d = dt.getDay()
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var e = days[d]
    document.getElementById('21d...').innerHTML=e
}
const vd = () =>{
    var a = document.getElementById('22d..').value
    var b = document.getElementById('22d').value
    var c = document.getElementById('22d.').value
    var dt = new Date(a,b,c)
    var d = dt.getDay() === 0 ? 7 : dt.getDay()
    document.getElementById('22d...').innerHTML=d
} 
const wd = () =>{
    var a = document.getElementById('23d..').value
    var b = document.getElementById('23d').value
    var c = document.getElementById('23d.').value
    var dt = new Date(a,b,c)
    var d = dt.getDate()
    if(d==1){
        document.getElementById('23d...').innerHTML =`${d}st`
    }else
    if(d==2){
        document.getElementById('23d...').innerHTML =`${d}nd`
    }else
    if(d==3){
        document.getElementById('23d...').innerHTML =`${d}rd`
    }else{
        document.getElementById('23d...').innerHTML =`${d}th`
    }
}
const xd = () =>{
    var a = document.getElementById('24d..').value
    var b = document.getElementById('24d').value
    var c = document.getElementById('24d.').value
    var dt = new Date(a,b,c)
    var tdt = new Date(dt.valueOf());
     var dayn = (dt.getDay() + 6) % 7;
     tdt.setDate(tdt.getDate() - dayn + 3);
     var firstThursday = tdt.valueOf();
     tdt.setMonth(0, 1);
     if (tdt.getDay() !== 4) 
       {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
        }
     var d = 1 + Math.ceil((firstThursday - tdt) / 604800000);
     document.getElementById('24d...').innerHTML = d
}
const yd = () =>{
    var a = document.getElementById('25d..').value
    var b = document.getElementById('25d').value
    var c = document.getElementById('25d.').value
    var dt = new Date(a,b,c)
    var d = dt.getMonth()
    var m = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
    var e = m[d] 
    document.getElementById('25d...').innerHTML = e
}
const zd = () =>{
    var a = document.getElementById('26d..').value
    var b = document.getElementById('26d').value
    var c = document.getElementById('26d.').value
    var dt = new Date(a,b,c)
    var d = dt.getMonth()
    if(d<10){
        document.getElementById('26d...').innerHTML =`0${d}`
    }else{
        document.getElementById('26d...').innerHTML = d
    }
}
const ab = () =>{
    var a = document.getElementById('27d..').value
    var b = document.getElementById('27d').value
    var c = document.getElementById('27d.').value
    var dt = new Date(a,b,c)
    var d = dt.getMonth()
    var m =["",'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var e = m[d] 
    document.getElementById('27d...').innerHTML = e
}
const bb = ()=>{
    var a = document.getElementById('28d..').value
    var b = document.getElementById('28d').value
    var c = document.getElementById('28d.').value
    var dt = new Date(a,b,c)
    var y = dt.getFullYear()
    document.getElementById('28d...').innerHTML = y
}
const cb = () =>{
    var a = document.getElementById('29d..').value
    var b = document.getElementById('29d').value
    var c = document.getElementById('29d.').value
    var dt = new Date(a,b,c)
    var y = ('' + dt.getFullYear()).substr(2)
    document.getElementById('29d...').innerHTML = y
}
const db =()=>{
    var dt = new Date
    var d = dt.getHours() < 12 ? 'am' : 'pm'
    document.getElementById('30d').innerHTML = d
}
const eb = ()=>{
    var dt = new Date
    var d = dt.getHours() < 12 ? 'AM' : 'PM'
    document.getElementById('31d').innerHTML = d
}
const fb = () =>{
    var a = document.getElementById('32d..').value
    var b = document.getElementById('32d').value
    var c = document.getElementById('32d.').value
    var dt = new Date(a,b,c)
    var d = Math.floor((((dt.getUTCHours() + 1) % 24) + dt.getUTCMinutes() / 60 + dt.getUTCSeconds() / 3600) * 1000 / 24)
    document.getElementById('32d...').innerHTML = d
}
const gb = ()=>{
    var dt = new Date
    var d = ((dt.getHours() % 12 || 12) < 10 ? '0' : '') + (dt.getHours() % 12 || 12)
    document.getElementById('33d...').innerHTML = d
}
const hb = ()=>{
    var dt = new Date
    var d = dt.getHours()
    document.getElementById('34d...').innerHTML = d
}
const ib =()=>{
    var dt = new Date
    var d = (dt.getMinutes() <10 ? '0' : '')  + (dt.getMinutes())
    document.getElementById('35d').innerHTML= d
}
const jb =()=>{
    var dt = new Date
    var d = (dt.getSeconds() < 10 ? '0' : '') + (dt.getSeconds())
    document.getElementById('36d').innerHTML = d
}
const kb = () =>{
    var d = /\((.*)\)/.exec(new Date().toString())[1]
    document.getElementById('37d').innerHTML = d
}
const lb =() =>{
    var dt = new Date
    var dst = null;
  for (var i = 0; i < 12; ++i) 
    {
      var d = new Date(dt.getFullYear(), i, 1);
      var offset = dt.getTimezoneOffset();

      if (dst === null) 
        dst = offset;
      else if (offset < dst) 
         {
           dst = offset; 
           break;
         } 
      else if (offset > dst) 
        break;
         }
     var t = (dt.getTimezoneOffset() == dst) | 0;
     document.getElementById('38d').innerHTML = t
}
const mb = ()=>{
    var dt = new Date
    var t =(-dt.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(dt.getTimezoneOffset() / 60)) + '00'
    document.getElementById('39d').innerHTML = t
}
const nb = ()=>{
    var dt = new Date
    var d = -dt.getTimezoneOffset() * 60;
    document.getElementById('40d').innerHTML = d
}
const ob =()=>{
    var a = parseInt(document.getElementById('41d').value)
    var dt = new Date
    var d = new Date(dt.setFullYear(dt.getFullYear()+a))
    document.getElementById('41d.').innerHTML = d
}
const pb=()=>{
    var a = parseInt(document.getElementById('42d').value)
    var dt = new Date
    var d = new Date(dt.setDate(dt.getDate() + (a*7)))
    document.getElementById('42d.').innerHTML = d
}
const rb = ()=>{
    var a  = parseInt(document.getElementById('43d').value)
    var dt = new Date
    var d = new Date(dt.setMonth(dt.getMonth()+ a))
    document.getElementById('43d.').innerHTML = d
}
const qb =()=>{
    var a = document.getElementById('IIIa').value
    var b = document.getElementById('Ia').value
    var c = document.getElementById('IIa').value
    var a2 = document.getElementById('VIa').value
    var b2 = document.getElementById('IVa').value
    var c2 = document.getElementById('Va').value    
    var dt1 = new Date(a,b,c)
    var dt2 = new Date(a2,b2,c2)
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    var d = Math.abs(Math.round(diff));
    document.getElementById('44d').innerHTML = d
}
const sb =()=>{
    var a = document.getElementById('IIIb').value
    var b = document.getElementById('Ib').value
    var c = document.getElementById('IIb').value
    var a2 = document.getElementById('VIb').value
    var b2 = document.getElementById('IVb').value
    var c2 = document.getElementById('Vb').value    
    var dt1 = new Date(a,b,c)
    var dt2 = new Date(a2,b2,c2)
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60*60);
    var d = Math.abs(Math.round(diff));
    document.getElementById('45d').innerHTML = d
}
const tb = ()=>{
    var a = document.getElementById('IIIc').value
    var b = document.getElementById('Ic').value
    var c = document.getElementById('IIc').value
    var a2 = document.getElementById('VIc').value
    var b2 = document.getElementById('IVc').value
    var c2 = document.getElementById('Vc').value    
    var dt1 = new Date(a,b,c)
    var dt2 = new Date(a2,b2,c2)
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60*60*24);
    var d = Math.abs(Math.round(diff));
    document.getElementById('46d').innerHTML = d
}
const ub = ()=>{
    var a = document.getElementById('IIIe').value
    var b = document.getElementById('Ie').value
    var c = document.getElementById('IIe').value
    var a2 = document.getElementById('VIe').value
    var b2 = document.getElementById('IVe').value
    var c2 = document.getElementById('Ve').value    
    var dt1 = new Date(a,b,c)
    var dt2 = new Date(a2,b2,c2)
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60*60*24*7);
    var d = Math.abs(Math.round(diff));
    document.getElementById('47d').innerHTML = d
}
const vb = ()=>{
    var a = document.getElementById('IIIf').value
    var b = document.getElementById('If').value
    var c = document.getElementById('IIf').value
    var a2 = document.getElementById('VIf').value
    var b2 = document.getElementById('IVf').value
    var c2 = document.getElementById('Vf').value    
    var dt1 = new Date(a,b,c)
    var dt2 = new Date(a2,b2,c2)
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60*60*24*30);
    var d = Math.abs(Math.round(diff));
    document.getElementById('48d').innerHTML = d
}
const wb = ()=>{
    var a = document.getElementById('IIIg').value
    var b = document.getElementById('Ig').value
    var c = document.getElementById('IIg').value
    var a2 = document.getElementById('VIg').value
    var b2 = document.getElementById('IVg').value
    var c2 = document.getElementById('Vg').value    
    var dt1 = new Date(a,b,c)
    var dt2 = new Date(a2,b2,c2)
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60*60*24*30*12);
    var d = Math.abs(Math.round(diff));
    document.getElementById('49d').innerHTML = d
}
const xb = ()=>{
    var dt = new Date
    var diff = dt.getDate() - dt.getDay() + (dt.getDay() === 0 ? -6 : 1);
  
    var d = new Date(dt.setDate(diff));
    document.getElementById('50d').innerHTML = d
}
const yb = () =>{
    var date = new Date
    var lastday = date.getDate() - (date.getDay() - 1) + 6;
    var d = new Date(date.setDate(lastday));
    document.getElementById('51d').innerHTML = d
}
const zb = ()=>{
    var date = new Date
    var d = new Date(date.getFullYear(), date.getMonth(), 1);
    document.getElementById('52d').innerHTML = d
}
const ccc =()=>{
    var date = new Date
    var d = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    document.getElementById('53d').innerHTML = d
}