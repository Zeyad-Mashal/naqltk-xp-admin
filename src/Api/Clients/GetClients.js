const URL = "https://naqlti.onrender.com/api/v1/client/get?page=1";

const GetClients = async (setloading, setError, setAllClients) => {
    setloading(true)
    const token = localStorage.getItem("naqltkxp-token")
    try {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": `naqNQ${token}`
            },
        });

        const result = await response.json();

        if (response.ok) {
            setloading(false);
            setAllClients(result.clients)
        } else {
            if (response.status == 401) {
                setError(result.message)
                setloading(false);
                console.log(result.message);
            } else if (response.status == 404) {
                setError(result.message)
                setloading(false);
                console.log(result.message);

            }
            else if (response.status == 500) {
                console.log(result.message);
            }
            setloading(false)
        }
    } catch (error) {
        setError('An error occurred');
        setloading(false)
    }
}
export default GetClients;