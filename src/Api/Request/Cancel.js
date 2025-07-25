const URL = "https://naqlti.onrender.com/api/v1/driver/cancel/";

const Cancel = async (setloading, setError, id, getAllRequests) => {
    setloading(true)
    const token = localStorage.getItem("naqltkxp-token")

    try {
        const response = await fetch(`${URL}${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "authorization": `naqNQ${token}`
            },
        });

        const result = await response.json();

        if (response.ok) {
            setloading(false);
            getAllRequests();
        } else {
            if (response.status == 401) {
                setError(result.message)
                setloading(false);
                console.log(result.message);
            } else if (response.status == 400) {
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
        console.log(error);

    }
}
export default Cancel;