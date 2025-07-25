const URL = "https://naqlti.onrender.com/api/v1/auth/login";

const Auth = async (setloading, setError, data) => {
    setloading(true)
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            setloading(false);
            localStorage.setItem("naqltkxp-token", result.data.token);
            window.location.href = "/dashboard";
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
    }
}
export default Auth;