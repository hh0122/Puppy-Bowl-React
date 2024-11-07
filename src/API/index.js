
const FetchPlayer = async () => {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players`)
  const responseJson = await response.json();
  return responseJson.data.players;
}

export default FetchPlayer;