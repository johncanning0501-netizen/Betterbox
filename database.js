
const binId = '68f3e84243b1c97be96fab7a';
const apiKeyBin = '$2a$10$25FhLq12Ha.gCayEcRMAaeoAa7QaZtLj2eTFWbHBiEOgjNwNTpVJu';
const url = "https://api.jsonbin.io/v3/b/"+binId+"?meta=false";

const getJSONData = async () =>{
    const response = await fetch(url,
        {
            method: 'GET',
            headers: {
                'X-Master-Key' : apiKeyBin,
                'Content-Type' : 'application/json'
            }
        }
    );
    if(response.status !==200){
        throw new Error("cannot fetch data");
    }
    let data = await response.json();
    return data;
}

const putJSONData = async (updatedData) => {
    try{
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'X-Master-Key' : apiKeyBin,
                'Content-Type' : 'application/json',
                'X-Bin-Versioning' : 'false',
            },
            body: JSON.stringify(updatedData),

        });
        console.log("Response status: ", response.status);
        if(response.status !==200){
            throw new Error('Failed to update data');
        }
        return await response.json();
    } catch(error){
        console.error('Error:', error.message);
        throw error;
    }
};