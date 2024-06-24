// import { IVec2d } from '@/types/IVec2d';
// import IndexEntry from '@/types/IndexEntry';
import { create } from 'zustand'



type State = {
    isProjectOpen: boolean;
    trackpointAX: number;
    trackpointBX: number;
}

type Action = {
    setProjectOpen: (open: boolean) => void;
    setTrackpointAX: (x: number) => void;
    setTrackpointBX: (x: number) => void;
}

const useArchStore = create<State & Action>()(
    (set) => ({
        isProjectOpen: false,
        trackpointAX: 0,
        trackpointBX: 0,
        setProjectOpen: (open) => set((state) => ({ isProjectOpen: open })),
        setTrackpointAX: (x) => set((state) => ({
            trackpointAX: x, 
        })),
        setTrackpointBX: (x) => set((state) => ({
            trackpointBX: x, 
        })),
    })
)

export default useArchStore;