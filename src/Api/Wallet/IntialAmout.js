const URL = "https://naqlti.onrender.com/api/v1/wallet/initialAmount/";

const IntialAmout = async (setloading, setError, driverId, data, getWalletData, setDone) => {
    setloading(true)
    const token = localStorage.getItem("naqltkxp-token")

    try {
        const response = await fetch(`${URL}${driverId}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "authorization": `naqNQ${token}`
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            setloading(false);
            getWalletData()
            setDone(true)
            setTimeout(() => {
                setDone(false)
            }, 3000);
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
export default IntialAmout;