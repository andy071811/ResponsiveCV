const domainName = import.meta.env.VITE_DOMAIN_NAME;
const apiEndpoint = `http://${domainName}/api`;

const getData = async (setData, setError) => {
    try {
        const res = await fetch(`${apiEndpoint}/homepage`); 
        const data = await res.json();
        setData(data.data);
    } catch(err) {
        setError(err);
    }
};

const getQualifications = async (setData, setError) => {
    try {
        const res = await fetch(`${apiEndpoint}/qualifications`);
        const data = await res.json();
        console.log(res)
        setData(data.data);
    } catch(err) {
        setError(err);
    }            
};

const getLinks = async (setData, setError) => {
    try {
        const res = await fetch(`${apiEndpoint}/projectLinks`);
        const data = await res.json();
        setData(data.data);
    } catch(err) {
        console.log(err);
        setError(err)
    }
};

const getExperience = async (setData, setError) => {
    try {
        const res = await fetch(`${apiEndpoint}/workExperience`);
        const data = await res.json();
        setData(data.data);
    } catch(err) {
        console.log(err);
        setError(err)
    }            
}

export { getData, getQualifications, getLinks, getExperience }