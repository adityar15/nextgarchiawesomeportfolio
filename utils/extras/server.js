
const base = require('./base.json')
const additional = require('./additional.json')


let components = {
    ...base,
    ...additional
}

// console.log("components", components)

fetch("https://garchi.co.uk/api/v2/section_template", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer 165|9LpiFUrGP8bZhCJnxcAEMI1EWXXazfetsbt9Miwf1d6451e2",
    },
    body: JSON.stringify({
      "section_templates": components,
      "space_uid": "62931923-b209-4e5c-9b91-57065cb443d279df607f-3026-45de-b684-5bee"
    })
  }).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res)
    }
  })
  .then(data => console.log('\x1b[36m%s\x1b[0m', "Components added successfully!"))
  .catch(err=> console.log("error adding components!", err))