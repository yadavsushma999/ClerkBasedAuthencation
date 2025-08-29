import { Spinner } from "../spinner";

type LoderProps = {
    loading: boolean;
    children: React.ReactNode
}


export const Loader = ({loading, children}:LoderProps)=> {
    return loading ? (
        <div className="w-full py-5 flex justify-center">
            <Spinner />
        </div>
    ) :
        (
            children
        );
};