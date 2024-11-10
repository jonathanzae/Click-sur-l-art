

  const reponse = await fetch("https://api.art.rmngp.fr/v1/works");
  const works = await reponse.json();
    
  console.log(works);
// async function init() {
//   const reponse = await fetch("https://api.art.rmngp.fr/v1/works", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });

// }