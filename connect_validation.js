var DAY_SUFFIX=".DAY",MONTH_SUFFIX=".MONTH",YEAR_SUFFIX=".YEAR",HOURS_SUFFIX=".HOUROFDAY",MINUTES_SUFFIX=".MINUTES",SECONDS_SUFFIX=".SECONDS",DATE_SUFFIX=".DATE",TIME_SUFFIX=".TIME";function validateRegularExpression(e,t,n,a,l,i,r,u){var s=!0;if(hasChanged(i,e)){if((!this.beforeValidation||this.beforeValidation(e,getMsg(i,"ValidationMessage","QUESTION_TEXT="+getLabelText(i,e)),null,null,n,a,l,null,null,i,null,null,u))&&(!this.beforeValidateRegularExpression||beforeValidateRegularExpression(e,t,n,a,l,i,u))){if(null==e.value||0==e.value.length)return r&&hideErrorMessage(i,e,u),updateStyles(i,e,u,"remove"),!0;if(""!=t){var g;try{g=new RegExp(t)}catch(e){log(e)}g&&!g.test(e.value)&&(null!=l[0]&&l[0].length>0?alertComp(e,l[0],i,r,u):alertComp(e,getMsg(i,"ValidationMessage","QUESTION_TEXT="+getLabelText(i,e)),i,r,u),s=!1)}s&&(r&&hideErrorMessage(i,e,u),updateStyles(i,e,u,"remove")),s=s?checkRange(e,trim(e.value).length,"Length",n,a,l,i,r,null,u):s}var o;if(this.afterValidateRegularExpression&&(s=afterValidateRegularExpression(e,t,n,a,l,i,s,u)),this.afterValidation&&(s=afterValidation(e,getMsg(i,"ValidationMessage","QUESTION_TEXT="+getLabelText(i,e)),null,null,n,a,l,null,null,i,null,null,s,u)),s)null==i&&(i=""),null!=(o=getVariable(i,"invalidQuestions"))&&delete o[e.id];else null==i&&(i=""),null==(o=getVariable(i,"invalidQuestions"))&&(o=new Array),o[e.id]=e,setVariable(i,"invalidQuestions",o)}return s}function getLabelText(e,t){if(!t||!t.id)return"";var n=t.getAttribute("type");if("checkbox"==n||"radio"==n){var a=stripPrefix(e,t.id),l=getCompID(e,a);null==l&&(l="");var i=e+l+"span_"+a,r=new RegExp("(_[0-9]+)$"),u=i.match(r);if(null!=u&&u.length>0){var s=u[0];i=i.substring(0,i.length-s.length)}if(i){var g=document.getElementById(i);if(g)return decodeHtml(g.innerHTML)}}var o=getParentWithRowId(t).querySelector("label[for='"+t.id+"']");if(o)return decodeHtml(o.textContent);var d=t.getAttribute("aria-label");return d?decodeHtml(d):""}function getParentWithRowId(e){for(;e&&e!==document;e=e.parentNode){var t=e.getAttribute("id");if(t&&t.indexOf("row_")>=0)return e}return null}function validFile(e,t,n,a,l,i,r,u){var s=!1,g=e.value;if((!this.beforeValidation||this.beforeValidation(e,getMsg(i,"InvalidUploadTypeMessage","QUESTION_TEXT="+getLabelText(i,e)),null,null,n,a,l,t,null,i,null,null,u))&&(!this.beforeValidFile||beforeValidFile(e,t,l,i))&&(null!=g&&0!=g.length||(enableSubmit(i,!0),s=!0),r&&hideErrorMessage(i,e,u),!s)){var o="",d=!1;if(null!=t&&t.length>0&&!validateFileExtension(e,t)){for(var f="",T=0;T<t.length;T++)f+=t[T]+" ";o+=getMsg(i,"InvalidUploadTypeMessage","QUESTION_CONSTRAINT="+f,"QUESTION_TEXT="+getLabelText(i,e)),d=!0}null!=a&&a.length>0&&!validateFileSize(e,a)&&(d&&(o+="&nbsp;&nbsp;"),o+=getMsg(i,"InvalidMaxFileSizeMessage","QUESTION_CONSTRAINT="+a,"QUESTION_TEXT="+getLabelText(i,e)),d=!0),d?(null!=l[0]&&l[0].length>0?alertComp(e,l[0],i,r):alertComp(e,o,i,r),null==i&&(i=""),enableSubmit(i,!1)):(null==i&&(i=""),enableSubmit(i,!0)),s=!d}return this.afterValidFile&&(s=afterValidFile(e,t,l,i,s)),this.afterValidation&&(s=afterValidation(e,getMsg(i,"InvalidUploadTypeMessage","QUESTION_TEXT="+getLabelText(i,e)),null,null,n,a,l,t,null,i,null,null,s,u)),s&&document.getElementById("form1").setAttribute("enctype","multipart/form-data"),s}function validateFileExtension(e,t){if(found=!1,null==t)found=!0;else for(var n=0;n<t.length;n++)e.value.substr(e.value.lastIndexOf(".")+1,e.value.length).toLowerCase()==t[n].toLowerCase()&&(found=!0);return found}function validateFileSize(e,t){if(window.FileReader&&(e.files&&e.files[0]&&e.files[0].size>1024*t))return!1;return!0}function validAlphaNumeric(e,t,n,a,l,i,r){return checkWithHook("ValidAlphaNumeric",e,"AN",getMsg(l,"InvalidAlphaNumericMessage","QUESTION_TEXT="+getLabelText(l,e)),null,null,t,n,a,null,null,l,i,null,null,r)}function validAlpha(e,t,n,a,l,i,r){return checkWithHook("ValidAlpha",e,"A",getMsg(l,"InvalidAlphaMessage","QUESTION_TEXT="+getLabelText(l,e)),null,null,t,n,a,null,null,l,i,null,null,r)}function validAllChars(e,t,n,a,l,i,r){return checkWithHook("ValidAllChars",e,"AC","",null,null,t,n,a,null,null,l,i,null,null,r)}function validNum(e,t,n,a,l,i,r,u,s,g,o,d){var f=checkWithHook(s,e,g,getMsg(i,o,"QUESTION_TEXT="+getLabelText(i,e)),a,null,t,n,l,null,null,i,r,null,null,u),T=e.value;if(f&&a&&a.length>0&&null!=(T=removeNumberFormating(e.value,a,!0))&&T.length>0){var c=addNumberFormating(T="-"==T.charAt(0)?"-"+T.substr(1).replace(d,""):T.replace(d,""),a);c!=T&&(e.value=c)}return f}function validNumeric(e,t,n,a,l,i,r,u){return validNum(e,t,n,a,l,i,r,u,"ValidNumeric","N","InvalidNumMessage",/^0+(?!$)/)}function validDouble(e,t,n,a,l,i,r,u){return validNum(e,t,n,a,l,i,r,u,"ValidDouble","D","InvalidDecimalMessage",/^0+(?!\.|$)/)}function validDateTime(e,t,n,a,l,i,r,u,s){return null==l&&(l=new Array("dd/mm/yyyy","hh:mm:ss")),null==i&&(i=new Array("/",":"," ")),checkWithHook("ValidDateTime",e,"VDT",getMsg(r,"InvalidDateMessage","QUESTION_CONSTRAINT="+unescape(l[0]+i[2]+l[1]),"QUESTION_TEXT="+getLabelText(r,e)),null,null,t,n,a,l,i,r,u,null,null,s)}function validDateWeekTime(e,t,n,a,l,i,r,u,s){return null==l&&(l=new Array("ww/yyyy","hh:mm:ss")),null==i&&(i=new Array("/",":"," ")),checkWithHook("ValidDateWeekTime",e,"VDWT",getMsg(r,"InvalidDateMessage","QUESTION_CONSTRAINT="+unescape(l[0]+i[2]+l[1]),"QUESTION_TEXT="+getLabelText(r,e)),null,null,t,n,a,l,i,r,u,null,null,s)}function validDateWeek(e,t,n,a,l,i,r,u,s){return null==l&&(l="ww/yyyy"),null==i&&(i="/"),checkWithHook("ValidDateWeek",e,"VDW",getMsg(r,"InvalidDateMessage","QUESTION_CONSTRAINT="+unescape(l),"QUESTION_TEXT="+getLabelText(r,e)),null,null,t,n,a,l,i,r,u,null,null,s)}function validDate(e,t,n,a,l,i,r,u,s){return null==l&&(l="dd/mm/yyyy"),null==i&&(i="/"),checkWithHook("ValidDate",e,"VD",getMsg(r,"InvalidDateMessage","QUESTION_CONSTRAINT="+unescape(l),"QUESTION_TEXT="+getLabelText(r,e)),null,null,t,n,a,l,i,r,u,null,null,s)}function validTime(e,t,n,a,l,i,r,u,s){return checkWithHook("ValidTime",e,"VT",getMsg(r,"InvalidTimeMessage","QUESTION_CONSTRAINT="+l,"QUESTION_TEXT="+getLabelText(r,e)),null,null,t,n,a,l,i,r,u,null,null,s)}function validDayDatePart(e,t,n,a,l,i,r,u,s,g,o,d,f){return validateOtherSplitParts(checkWithHook("ValidDayDatePart",e,"VDP",getMsg(o,"InvalidDateMessage","QUESTION_CONSTRAINT="+s,"QUESTION_TEXT="+getLabelText(o,e)),t,n,a,l,u,s,g,o,d,i,r,f),e.id)}function validMonthDatePart(e,t,n,a,l,i,r,u,s,g,o,d,f){return validateOtherSplitParts(checkWithHook("ValidMonthDatePart",e,"VMP",getMsg(o,"InvalidDateMessage","QUESTION_CONSTRAINT="+s,"QUESTION_TEXT="+getLabelText(o,e)),t,n,a,l,u,s,g,o,d,i,r,f),e.id)}function validYearDatePart(e,t,n,a,l,i,r,u,s,g,o,d,f){return validateOtherSplitParts(checkWithHook("ValidYearDatePart",e,"VYP",getMsg(o,"InvalidDateMessage","QUESTION_CONSTRAINT="+s,"QUESTION_TEXT="+getLabelText(o,e)),n,t,a,l,u,s,g,o,d,i,r,f),e.id)}function validHourTimePart(e,t,n,a,l,i,r,u,s,g,o,d,f){return validateOtherSplitParts(checkWithHook("ValidHourTimePart",e,"VHT",getMsg(o,"InvalidTimeMessage","QUESTION_CONSTRAINT="+s,"QUESTION_TEXT="+getLabelText(o,e)),t,n,a,l,u,s,g,o,d,null,null,f),e.id)}function validMinuteTimePart(e,t,n,a,l,i,r,u,s,g,o,d,f){return validateOtherSplitParts(checkWithHook("ValidMinuteTimePart",e,"VMT",getMsg(o,"InvalidTimeMessage","QUESTION_CONSTRAINT="+s,"QUESTION_TEXT="+getLabelText(o,e)),t,n,a,l,u,s,g,o,d,null,null,f),e.id)}function validSecondTimePart(e,t,n,a,l,i,r,u,s,g,o,d,f){return validateOtherSplitParts(checkWithHook("ValidSecondTimePart",e,"VST",getMsg(o,"InvalidTimeMessage","QUESTION_CONSTRAINT="+s,"QUESTION_TEXT="+getLabelText(o,e)),t,n,a,l,u,s,g,o,d,null,null,f),e.id)}function validWeekDatePart(e,t,n,a,l,i,r,u,s,g,o,d){return checkWithHook("ValidWeekDatePart",e,"VWP",getMsg(g,"InvalidDateMessage","QUESTION_CONSTRAINT="+u,"QUESTION_TEXT="+getLabelText(g,e)),"",t,n,a,r,u,s,g,o,l,i,d)}function validateOtherSplitParts(e,t){if(!e||getTriggeredReason()==FORMAT_VALIDATION_TRIGGER)return e;var n=t.substring(t.lastIndexOf("."));e=!0;var a=t.substring(0,t.lastIndexOf("."));return e=validPart(a,e,".DAY",n),e=validPart(a,e,".MONTH",n),e=validPart(a,e,".YEAR",n),e=validPart(a,e,".HOUROFDAY",n),e=validPart(a,e,".MINUTES",n),e=validPart(a,e,".SECONDS",n)}function validPart(e,t,n,a){var l=document.getElementById(e+n);return t&&l&&a!=n&&(t=l.onchange?execute(l,"onchange",FORMAT_VALIDATION_TRIGGER):execute(l,"onblur",FORMAT_VALIDATION_TRIGGER)),t}function checkWithHook(e,t,n,a,l,i,r,u,s,g,o,d,f,T,c,h){var m,I=!0;(this.beforeValidation&&!this.beforeValidation(t,a,l,i,r,u,s,g,o,d,T,c)||this["before"+e]&&!this["before"+e](t,a,l,i,r,u,s,g,o,d,T,c)||(I=checkA(t,n,a,l,i,r,u,s,g,o,d,f,T,c,h)),this["after"+e]&&(I=this["after"+e](t,a,l,i,r,u,s,g,o,d,T,c,I)),this.afterValidation&&(I=this.afterValidation(t,a,l,i,r,u,s,g,o,d,T,c,I)),I)?(null==d&&(d=""),null!=(m=getVariable(d,"invalidQuestions"))&&delete m[t.id],t.removeAttribute("aria-invalid")):(null==d&&(d=""),null==(m=getVariable(d,"invalidQuestions"))&&(m=new Array),m[t.id]=t,setVariable(d,"invalidQuestions",m),t.setAttribute("aria-invalid","true"));return I}function checkA(e,t,n,a,l,i,r,u,s,g,o,d,f,T,c){var h=!0,m=getElementValue(e,o);if(e.validity&&!e.validity.valid&&(h=!1),null==m||""==m)return isFieldInMandError(o,e.id)||(d&&hideErrorMessage(o,e,c),updateStyles(o,e,c,"remove")),!0;if(h){var I=null;if("N"!=t&&"D"!=t||a&&a.length>0&&(m=removeNumberFormating(m,a,!1)),"A"==t)h=isAlpha(m);else if("AN"==t)h=isAlphanumeric(m);else if("AC"==t);else if("N"==t)h=isClientInteger(m);else if("D"==t){var v=".";a&&a.length>0&&(v=""+a.charAt(0)),h=isClientDouble(m,v)}else if("VDP"==t)h=isDay(m);else if("VMP"==t)h=isMonth(m);else if("VWP"==t)h=isWeek(m);else if("VYP"==t)h=isYear(m);else if("VHT"==t)h=isHour(m);else if("VMT"==t)h=isMinute(m);else if("VST"==t)h=isSecond(m);else if("VT"==t)h=isTime(m,s,g);else if("VD"==t){null!=(E=nDate(m,s,g,o))?e.value=E:h=!1}else if("VDT"==t){null!=(E=nDateTime(m,s,g,o))?e.value=E:h=!1}else if("VDWT"==t){null!=(E=nDateWeekTime(m,s,g,o))?e.value=E:h=!1}else if("VDW"==t){var E;null!=(E=nDateWeek(m,s,g,o))?e.value=E:h=!1}}if(!h){var M=0;"VHT"!=t&&"VMT"!=t&&"VST"!=t&&"VT"!=t||(M=5);var N=u[M]&&u[M].length>0?getMsg("@GOT_MSG@",u[M],"QUESTION_CONSTRAINT="+s,"QUESTION_TEXT="+getLabelText(o,e)):n;return N||(N=getMsg(o,"ValidationMessage","QUESTION_TEXT="+getLabelText(o,e))),alertComp(e,N,o,d,c)}if(getForm(o)&&(I=getForm(o).elements),d&&hideErrorMessage(o,e,c),updateStyles(o,e,c,"remove"),"A"==t.charAt(0))return checkRange(e,m.length,"Length",i,r,u,o,d,null,c);if("N"==t)return 0==i.indexOf("+")&&(i=i.substring(1)),0==r.indexOf("+")&&(r=r.substring(1)),checkRange(e,mpi(m),"Value",i,r,u,o,d,a,c);if("D"==t)return 0==i.indexOf("+")&&(i=i.substring(1)),0==r.indexOf("+")&&(r=r.substring(1)),a&&a.length>0&&(m=removeNumberFormating(m,a,!0)),checkRange(e,mpd(m),"Value",i,r,u,o,d,a,c);if("VDP"==t)return validDateParts(e,e,I[e.name.substring(0,e.name.lastIndexOf("."))+a],I[e.name.substring(0,e.name.lastIndexOf("."))+l],i,r,f,T,s,g,o,d,u,c);if("VMP"==t)return validDateParts(e,I[e.name.substring(0,e.name.lastIndexOf("."))+a],e,I[e.name.substring(0,e.name.lastIndexOf("."))+l],i,r,f,T,s,g,o,d,u,c);if("VYP"==t)return validDateParts(e,I[e.name.substring(0,e.name.lastIndexOf("."))+a],I[e.name.substring(0,e.name.lastIndexOf("."))+l],e,i,r,f,T,s,g,o,d,u,c);if("VD"==t||"VDT"==t){var y=e.value;if("VDT"==t)(b=y.indexOf(g[2]))>-1&&(y=y.substring(0,b)),s=s[0],g=g[0];return!!checkMinDate(e,y,i,s,g,o,d,f,u,c)&&!!checkMaxDate(e,y,r,s,g,o,d,T,u,c)}if("VDW"==t||"VDWT"==t){var b;y=e.value;if("VDWT"==t)(b=y.indexOf(g[2]))>-1&&(y=y.substring(0,b)),s=s[0],g=g[0];return!!checkMinDateWeek(e,y,i,s,g,o,d,f,u,c)&&!!checkMaxDateWeek(e,y,r,s,g,o,d,T,u,c)}return!0}function trim(e){return e.replace(/^\s+|\s+$/g,"")}function isAlpha(e){var t;e=e.toUpperCase();for(var n=0;n<e.length;n++)if(!isLetter(t=e.charAt(n))&&!isSpecial(t))return!1;return!0}function isAlphanumeric(e){var t;e=e.toUpperCase();for(var n=0;n<e.length;n++)if(!isDigit(t=e.charAt(n))&&!isLetter(t)&&!isSpecial(t))return!1;return!0}function isLegalExpresion(e,t){var n=e.value;if(null!=n&&0!=n.length&&new RegExp("\\$(%|\\$).*[a-zA-Z0-9_-].*\\$").test(e.value))return alertComp(e,getMsg("","ValidationMessage","QUESTION_TEXT="+getLabelText(ns,e)),"",!0,t),!1;return!0}function isClientInteger(e,t){return isInt(e,t)}function isInteger(e){return isInt(e,".,")}function isInt(e,t){if(0==e.length)return!0;var n;t&&t.length>1&&(n=t.charAt(1));for(var a=0;a<e.length;a++)if(0!=a||"-"!=e.charAt(a)&&"+"!=e.charAt(a)){if(!(isDigit(e.charAt(a))||n&&""!=n&&e.charAt(a)==n))return!1}else if(1==e.length)return!1;return!0}function isClientDouble(e,t){return isDbl(e,t)}function isDouble(e){return isDbl(e,".,")}function isDbl(e,t){return e=removeNumberFormating(e,t,!0),!isNaN(parseFloat(e))&&isFinite(e)}function isDigit(e){return e>="0"&&e<="9"}function isLetter(e){return e>="A"&&e<="Z"}function isSpecial(e){return" "==e||"'"==e}function isTime(e,t,n){for(var a=splitstring(e,n,!1,!0),l=splitstring(t,n,!1,!0),i=0;i<l.length;i++){if(""==a[i]||isNaN(a[i])||parseInt(a[i])<0)return!1;if("hh"==l[i]){if(parseInt(a[i])>23)return!1}else if(parseInt(a[i])>59)return!1}return!0}function addNumberFormating(e,t){var n=t.charAt(0),a=t.charAt(1),l=new Array,i=e+"";if(i.length>0&&"."==i.charAt(0)&&(i="0"+i),l=splitstring(i,".",!1,!0),"Y"==t.charAt(1)&&(a=t.charAt(2))&&""!=a)for(var r=new RegExp("(-?\\d+)(\\d{3})");r.test(l[0]);)l[0]=l[0].replace(r,"$1"+a+"$2");return l[1]?l[0]+n+l[1]:l[0]}function removeNumberFormating(e,t,n){if(e&&""!=e){var a,l=e,i=t.charAt(0);if(i&&""!=i&&(l.charAt(0)==i&&(l="0"+l),1!=(a=splitstring(l,i,!1,!0)).length&&2!=a.length||(l=a[0])),"Y"==t.charAt(1)){var r=t.charAt(2);if(r&&""!=r)if("Y"==t.charAt(3)){var u=0;"-"==l.charAt(0)&&(u=1);for(var s=l.length-4;s>u;s-=4){var g=l.charAt(s);if(g!=r&&!isDigit(g))return e;g==r?l=l.substring(0,s)+l.substring(s+1):s++}}else{var o=new RegExp(r,"g");-1!="[^$.|?*+()".indexOf(r)&&(o=new RegExp("\\"+r,"g")),l=l.replace(o,"")}}e=l,i&&""!=i&&2==a.length&&(e=n?e+"."+a[1]:e+i+a[1])}return e}function checkRange(e,t,n,a,l,i,r,u,s,g){return!!checkMin(e,t,a,n,i,r,u,s,g)&&!!checkMax(e,t,l,n,i,r,u,s,g)}function checkMax(e,t,n,a,l,i,r,u,s){if(""==n)return!0;var g=""+t,o=""+n;return isInteger(g)&&isInteger(o)?(g=mpi(g),o=mpi(o)):isDouble(g)&&isDouble(o)&&(g=mpd(g),o=mpd(o)),!(g>o)||(l[2].length>0?alertComp(e,l[2],i,r,s):(u&&u.length>0&&(o=addNumberFormating(o,u)),alertComp(e,getMsg(i,"InvalidMax"+a+"Message","QUESTION_CONSTRAINT="+o,"QUESTION_TEXT="+getLabelText(i,e)),i,r,s)),!1)}function checkMin(e,t,n,a,l,i,r,u,s){if(""==n)return!0;var g=""+t,o=""+n;return isInteger(g)&&isInteger(o)?(g=mpi(g),o=mpi(o)):isDouble(g)&&isDouble(o)&&(g=mpd(g),o=mpd(o)),!(g<o)||(l[1].length>0?alertComp(e,l[1],i,r,s):(u&&u.length>0&&(o=addNumberFormating(o,u)),alertComp(e,getMsg(i,"InvalidMin"+a+"Message","QUESTION_CONSTRAINT="+o,"QUESTION_TEXT="+getLabelText(i,e)),i,r,s)),!1)}function mpi(e,t){for(e=null==e&&null!=t?""+t:""+e;"0"==e.charAt(0)&&e.length>1;)e=e.substring(1);return parseInt(e,10)}function mpd(e){for(e=""+e;"0"==e.charAt(0)&&e.length>1;)e=e.substring(1);return parseFloat(e)}function validDateParts(e,t,n,a,l,i,r,u,s,g,o,d,f,T){if(null!=t&&""==t.value||null!=n&&""==n.value||null!=a&&""==a.value)return!0;var c=null==a?getCurrentYear(o):parseInt(a.value,10),h=null==n?1:mpi(n.value,1),m=null==t?1:mpi(t.value,1);if(m>daysInMonth[h])return alertComp(t,f[3]&&f[3].length>0?f[3]:getMsg(o,"InvalidDaysInMonthMessage","QUESTION_TEXT="+getLabelText(o,t)),o,d,T);if(2==h&&m>daysInFebruary(c))return alertComp(a,f[4]&&f[4].length>0?f[4]:getMsg(o,"InvalidLeapYearMessage","QUESTION_TEXT="+getLabelText(o,a)),o,d,T);if(""==l&&""==i)return!0;var I=m+"/"+h+"/"+c,v=splitstring(l,"/",!1),E=splitstring(i,"/",!1);s.indexOf("dd")<0&&(v[0]="1",E[0]="1"),s.indexOf("mm")<0&&(v[1]="1",E[1]="1"),s.indexOf("yyyy")<0&&(v[2]=getCurrentYear(o),E[2]=getCurrentYear(o));var M=v[0]+"/"+v[1]+"/"+v[2],N=E[0]+"/"+E[1]+"/"+E[2];return!(""!=l&&!checkMinDate(e,I,M,"dd/mm/yyyy","/",o,d,r,f,T))&&!(""!=i&&!checkMaxDate(e,I,N,"dd/mm/yyyy","/",o,d,u,f,T))}function getCurrentYear(e){return getVariable(e,"CURRENT_YEAR")}function nDateTime(e,t,n,a){if(null==e||""==e)return null;var l=e.indexOf(n[2]);if(l>-1){var i=e.substring(0,l),r=e.substring(l+1);return null==(i=nDate(i,t[0],n[0],a))?null:isTime(r,t[1],n[1])?i+n[2]+r:null}return nDate(e,t[0],n[0],a)}function nDateWeekTime(e,t,n,a){if(null==e||""==e)return null;var l=e.indexOf(n[2]);if(l>-1){var i=e.substring(0,l),r=e.substring(l+1);return null==(i=nDateWeek(i,t[0],n[0],a))?null:isTime(r,t[1],n[1])?i+n[2]+r:null}return nDateWeek(e,t[0],n[0],a)}function nDate(e,t,n,a){if(null==e||""==e)return null;var l=splitstring(stripTrailingChars(e,n),n,!1,!0),i=splitstring(stripTrailingChars(t,n),n,!1);if(l.length!=i.length)return null;this.dd="1",this.mm="1",this.yy=getCurrentYear(a);var r=null;if(i.length>0){if("dd"==i[0]){if(isNaN(l[0]))return null;this.dd=mpi(l[0])}else if("mm"==i[0]){if(isNaN(l[0]))return null;this.mm=mpi(l[0])}else if("yyyy"==i[0]){if(isNaN(l[0]))return null;this.yy=mpi(l[0])}r="",1==l[0].length&&(r="0"),r+=l[0]}if(i.length>1){if("dd"==i[1]){if(isNaN(l[1]))return null;this.dd=mpi(l[1])}else if("mm"==i[1]){if(isNaN(l[1]))return null;this.mm=mpi(l[1])}else if("yyyy"==i[1]){if(isNaN(l[1]))return null;this.yy=mpi(l[1])}r+=n,1==l[1].length&&(r+="0"),r+=l[1]}if(i.length>2){if("dd"==i[2]){if(isNaN(l[2]))return null;this.dd=mpi(l[2])}else if("mm"==i[2]){if(isNaN(l[2]))return null;this.mm=mpi(l[2])}else if("yyyy"==i[2]){if(isNaN(l[2]))return null;this.yy=mpi(l[2])}r+=n,1==i[2].length&&(r+="0"),r+=l[2]}return isDate(""+this.yy,""+this.mm,""+this.dd)?r:null}function nDateWeek(e,t,n,a){if(null==e||""==e)return null;var l=splitstring(stripTrailingChars(e,n),n,!1,!0),i=splitstring(stripTrailingChars(t,n),n,!1);if(l.length!=i.length)return null;this.ww=1,this.yy=getCurrentYear(a);var r=null;if(i.length>0){if("ww"==i[0]){if(isNaN(l[0]))return null;this.ww=mpi(l[0])}else if("yyyy"==i[0]){if(isNaN(l[0]))return null;this.yy=mpi(l[0])}r="",1==l[0].length&&(r="0"),r+=l[0]}if(i.length>1){if("ww"==i[1]){if(isNaN(l[1]))return null;this.ww=mpi(l[1])}else if("yyyy"==i[1]){if(isNaN(l[1]))return null;this.yy=mpi(l[1])}r+=n,1==l[1].length&&(r+="0"),r+=l[1]}return isWeek(this.ww)&&isYear(""+this.yy)?r:null}function setFocus(e){if(e)try{if(document.querySelectorAll){var t=e.id+"_editor",n=document.querySelectorAll("."+t);n.length>0&&(e=n[0])}e.type&&"text"==e.type&&e.select(),e.focus(),setTimeout((function(){try{e.focus()}catch(e){}}),100)}catch(e){}return!1}function isDate(e,t,n){if(!(isYear(e)&&isMonth(t)&&isDay(n)))return!1;var a=parseInt(e,10),l=mpi(t),i=mpi(n);return!(i>daysInMonth[l])&&!(2==l&&i>daysInFebruary(a))}function checkMaxDate(e,t,n,a,l,i,r,u,s,g){var o=!0;if(""==n)return o;var d=new nDate(t,a,l,i),f=new nDate(n,a,l,i);return d.yy>f.yy&&(o=!1),d.yy==f.yy&&(d.mm>f.mm||d.mm==f.mm&&d.dd>f.dd)&&(o=!1),!!o||alertComp(e,s[2]&&s[2].length>0?s[2]:getMsg(i,"InvalidMaxDateMessage","QUESTION_CONSTRAINT="+(null==u?n:u),"QUESTION_TEXT="+getLabelText(i,e)),i,r,g)}function checkMinDate(e,t,n,a,l,i,r,u,s,g){var o=!0;if(""==n)return!0;var d=new nDate(t,a,l,i),f=new nDate(n,a,l,i);return d.yy<f.yy&&(o=!1),d.yy==f.yy&&(d.mm<f.mm||d.mm==f.mm&&d.dd<f.dd)&&(o=!1),!!o||alertComp(e,s[1]&&s[1].length>0?s[1]:getMsg(i,"InvalidMinDateMessage","QUESTION_CONSTRAINT="+(null==u?n:u),"QUESTION_TEXT="+getLabelText(i,e)),i,r,g)}function checkMaxDateWeek(e,t,n,a,l,i,r,u,s,g){var o=!0;if(""==n)return o;var d=new nDateWeek(t,a,l,i),f=new nDateWeek(n,a,l,i);return d.yy>f.yy&&(o=!1),d.yy==f.yy&&d.ww>f.ww&&(o=!1),!!o||alertComp(e,s[2]&&s[2].length>0?s[2]:getMsg(i,"InvalidMaxDateMessage","QUESTION_CONSTRAINT="+(null==u?n:u),"QUESTION_TEXT="+getLabelText(i,e)),i,r,g)}function checkMinDateWeek(e,t,n,a,l,i,r,u,s,g){var o=!0;if(""==n)return!0;var d=new nDateWeek(t,a,l,i),f=new nDateWeek(n,a,l,i);return d.yy<f.yy&&(o=!1),d.yy==f.yy&&d.ww<f.ww&&(o=!1),!!o||alertComp(e,s[1]&&s[1].length>0?s[1]:getMsg(i,"InvalidMinDateMessage","QUESTION_CONSTRAINT="+(null==u?n:u),"QUESTION_TEXT="+getLabelText(i,e)),i,r,g)}function isIntegerInRange(e,t,n){return!!isInteger(e)&&intbounds(mpi(e),t,n)}function intbounds(e,t,n){return e>=t&&e<=n}function isYear(e){return isInteger(e)&&4==e.length}function isWeek(e){return isIntegerInRange(e,1,53)}function isMonth(e){return isIntegerInRange(e,1,12)}function isDay(e){return isIntegerInRange(e,1,31)}function isHour(e){return isIntegerInRange(e,0,23)}function isMinute(e){return isIntegerInRange(e,0,59)}function isSecond(e){return isIntegerInRange(e,0,59)}function daysInFebruary(e){return isNaN(e)?29:e%4!=0||e%100==0&&e%400!=0?28:29}function stripTrailingChars(e,t){for(var n=e.length-1;n>=0;)-1!=t.indexOf(e.charAt(n))?e=e.substring(0,n--):n=-1;return e}function alertMandMessage(e,t,n){var a=getMandMessage(t,e);"Mandatory"==a?a=getMsg(t,"MandMessage","QUESTION_CONSTRAINT="+getVariable(t,"MANDCHAR"),"QUESTION_TEXT="+getLabelText(t,e)):(a=substituteVariable(a,"QUESTION_CONSTRAINT="+getVariable(t,"MANDCHAR")),a=substituteVariable(a,"QUESTION_TEXT="+getLabelText(t,e))),ok=alertComp(e,a,t,n)}function getTListContainerDiv(e){return getParentNode(e.parentNode,"DIV")}function showErrorMessage(e,t,n,a){var l=getErrorMessageId(e,t),i=document.getElementById(l);if(i){jscss("remove",i,"qlrError");var r=getWarningMessageId(e,t),u=getInfoMessageId(e,t),s=i;if(null!=s.nextSibling)for(;(s.nextSibling.id==r||s.nextSibling.id==u)&&"none"==(s=s.nextSibling).style.display&&null!=s.nextSibling;);i.innerHTML="";var g=n;s!=i&&"none"!=s.style.display&&"Y"!=getVariable(e,"ShowOneMessage")&&(g+=getVariable(e,"MessagesSeparator")),i.innerHTML=g,showElem(i,!0)}var o=getErrorMessageRowId(e,t),d=document.getElementById(o);d&&showElem(d,!0)}function getMandMessageId(e,t){var n=getLookupId(e,t),a=n[0]+"MM_"+n[1]+n[2];return null==document.getElementById(a)&&(n=getLookupId(e,t,!0)),n[0]+"MM_"+n[1]+n[2]}function getMandMessage(e,t){var n="",a=getMandMessageId(e,t),l=document.getElementById(a);return null!=l&&null!=l.innerHTML&&(n=l.innerHTML),n}function mandCheckRow(e,t,n,a,l){null==t&&(t="");var i=!0,r=null,u=document.getElementById(t+e),s=getMsg(t,"MandMessage","QUESTION_CONSTRAINT="+getVariable(t,"MANDCHAR"));this.beforeMandCheckRow&&!this.beforeMandCheckRow(u,s,t)||(r=checkMandFields(getFormElems(t,t+e),t,n,a,l));return null!=r&&(i=!1,alertMandMessage(r,t,a),setFocus(r)),this.afterMandCheckRow&&(i=this.afterMandCheckRow(u,s,t,i)),i}function mandCheckElems(e,t,n,a,l){null==t&&(t="");var i=!0,r=null,u=getMsg(t,"MandMessage","QUESTION_CONSTRAINT="+getVariable(t,"MANDCHAR"));if(this.beforeMandCheckElems&&!this.beforeMandCheckElems(e,t,n,u)||(r=checkMandFields(e,t,n,a,l)),null!=r){i=!1,alertMandMessage(r,t,a);try{setFocus(r)}catch(e){}}return this.afterMandCheckElems&&(i=this.afterMandCheckElems(e,t,n,u,i,r)),i}function isFieldInMandError(e,t){var n=getVariable(e,"MAND_ERRORS");if(n)for(var a=0;a<n.length;a++)if(n[a]==t)return!0;return!1}function arraycontains(e,t){for(var n=e.length;n--;)if(e[n]===t)return!0;return!1}function checkMandFields(e,t,n,a,l){setVariable(t,"MAND_ERRORS",null);for(var i=new Array,r=new Array,u=null,s=n?getCompID(t,n):null,g=0;g<e.length;g++){var o=e[g];if(!o.disabled&&"hidden"!=o.type&&-1==o.id.indexOf(UNSELECT_LIST_PREFIX)){if(!l&&null!=o.name&&o.name==n)break;if(null!=s&&null!=o.id&&0!=o.id.indexOf(s))continue;var d=""+getElementValue(o,t),f=IE4||"textarea"==o.type||"text"==o.type||"select-one"==o.type||"select-multiple"==o.type?o.style:o.parentNode.style;if(getMandMessage(t,o).length>0)if(""==trim(d)){showMessage=!0;var T,c=getLookupId(t,o),h=c[0]+c[1]+c[2];if(arraycontains(i,h)||(r.push(o.id),i.push(h)),null!=(I=extractStyleArray(o))&&updateStyles(t,o,I,"add"),o.onchange?T=""+o.onchange:"radio"==o.type||"checkbox"==o.type&&o.onclick?T=""+o.onclick:"radio"==o.type||"checkbox"==o.type?T=""+o.parentNode.parentNode.onclick:o.onblur&&(T=""+o.onblur),T){var m=T.lastIndexOf(" ['")>0&&T.lastIndexOf("']")>0?T.substring(T.lastIndexOf(" ['")+2,T.lastIndexOf("']")+1):T.substring(T.lastIndexOf(' ["')+2,T.lastIndexOf('"]')+1);try{var I=m.replace(/'/g,"").replace(/"/g,"").split(",");updateStyles(t,o,I,"add")}catch(e){}}null==u&&(u=o),a&&alertMandMessage(o,t,a)}else{if(o.id.indexOf(SELECT_LIST_PREFIX)>-1){var v=o.id.substring(o.id.indexOf(SELECT_LIST_PREFIX)+SELECT_LIST_PREFIX.length),E=document.getElementById(t+UNSELECT_LIST_PREFIX+v);null!=E&&(f=E.style)}setMandStyle(o,f,!1)}}}return null==u&&(r=null),setVariable(t,"MAND_ERRORS",r),u}function formatCheckElems(e,t,n){null==t&&(t="");var a=getVariable(t,"focusValue");setVariable(t,"focusValue","");for(var l,i,r=!0,u=new Array,s=0;s<e.length;s++)if(null!=(i=e[s]).type&&!i.disabled&&"hidden"!=i.type&&-1==i.id.indexOf(UNSELECT_LIST_PREFIX)){accumulateDateTimeElems(i,u,t);var g=!0;if(null!=i.onchange&&((""+i.onchange).indexOf("ajax")<0||(""+i.onchange).indexOf("ajaxQuestionAction")>0||(""+i.onchange).indexOf("ajaxSubList")>0||null!=i.onblur&&(""+i.onblur).indexOf("ec_suggest")>0)&&(0!=i.type.indexOf("select")||isDatePartElem(i))?g=execute(i,"onchange",FORMAT_VALIDATION_TRIGGER):null!=i.onblur&&((""+i.onblur).indexOf("ajax")<0||(""+i.onblur).indexOf("ajaxQuestionAction")>0||(""+i.onblur).indexOf("ajaxSubList")>0)&&(0!=i.type.indexOf("select")||isDatePartElem(i))&&(g=execute(i,"onblur",FORMAT_VALIDATION_TRIGGER)),null!=g&&0==g){r=!1,setFocus(i);break}}return l=validateDateTimeElems(u,t,n),this.afterFormatCheckElems&&this.afterFormatCheckElems(i,t,r,l),setVariable(t,"focusValue",a),setVariable(t,"FORMAT_ERRORS",r&&l?null:i),r&&l}function alertComp(e,t,n,a,l){a||(a=!1);var i=!1;if(null==n&&(n=""),this.beforeMessageAlert&&!beforeMessageAlert(e,t,n)||(updateStyles(n,e,l,"add"),a?showErrorMessage(n,e,t,l):alert(t)),null!=e){var r=getVariable(n,"MAND_ERRORS"),u=getVariable(n,"FORMAT_ERRORS");(r||u)&&showTab(e,n),a||setFocus(e)}return this.afterMessageAlert&&(i=afterMessageAlert(e,t,n,i)),i}function isDatePartElem(e){return null!=e&&isDatePartFunctionName(e.name)}function accumulateDateTimeElems(e,t,n){isDatePartElem(e)&&(t[e.name]=e)}function validateDateTimeElems(e,t,n){var a=new Array;for(var l in e)if("object"==typeof e[l]){var i=e[l],r=l.substring(0,l.lastIndexOf("."));if(a[r])continue;var u=""+getElementValue(i,t);if(""==trim(u))continue;a[r]=!0;for(var s=0;s<DATE_TIME_PARTS.length;s++){var g=r+"."+DATE_TIME_PARTS[s];if(g!=l){var o=e[g];if(o&&""==trim(u=""+getElementValue(o,t)))return alertComp(o,getMsg(t,"ValidationMessage","QUESTION_TEXT="+getLabelText(t,o)),t,n)}}}return!0}function trimValue(e,t){e.value=trim(getElementValue(e,t))}