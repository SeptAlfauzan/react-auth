const refreshTokenSetup = (res) => {
    let refreshTiming = (res.tokenOBJ.expires_in || 3600 - 5 * 6) * 1000;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();

        console.log(newAuthRes);
        setTimeout(refreshToken, refreshTiming);
    }
    setTimeout(refreshToken, refreshTiming);
}

module.exports = {refreshTokenSetup: refreshTokenSetup};