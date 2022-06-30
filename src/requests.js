const API_KEY="7867647accdbb95c9a82b38a21b0f9ff";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`

}

export default requests;