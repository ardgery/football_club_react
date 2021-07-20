import useSWR from 'swr'
import axios from 'axios'

export default function SWR(url) {
    let token = "ac85731748e04303bc9842c0f6cea8fb";
    const fetcher = (url) =>
        axios
            .get(url, { headers: { 'X-Auth-Token': token } })
            .then((res) => {
                return res.data;
            })
        ;

    const { data } = useSWR(
        [url, token],
        fetcher
    );

    return data;
}
