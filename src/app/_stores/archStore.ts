// import { IVec2d } from '@/types/IVec2d';
// import IndexEntry from '@/types/IndexEntry';
import { create } from 'zustand'



type State = {
    isProjectOpen: boolean;
    isTrackpointAEnabled: boolean;
    trackpointAX: number;
    trackpointAY: number;
    trackpointBX: number;
}

type Action = {
    setProjectOpen: (open: boolean) => void;
    enableTrackpointA: (enable: boolean) => void;
    setTrackpointAX: (x: number) => void;
    setTrackpointAY: (y: number) => void;
    setTrackpointBX: (x: number) => void;
}

const useArchStore = create<State & Action>()(
    (set) => ({
        isProjectOpen: false,
        trackpointAX: 0,
        trackpointAY: 0,
        trackpointBX: 0,
        isTrackpointAEnabled: false,
        setProjectOpen: (open) => set((state) => ({ isProjectOpen: open })),
        enableTrackpointA: (enable) => set((state) => ({
            isTrackpointAEnabled: enable
        })),
        setTrackpointAX: (x) => set((state) => ({
            trackpointAX: x, 
        })),
        setTrackpointAY: (y) => set((state) => ({
            trackpointAY: y, 
        })),
        setTrackpointBX: (x) => set((state) => ({
            trackpointBX: x, 
        })),
    })
)

export default useArchStore;