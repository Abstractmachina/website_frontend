// import { IVec2d } from '@/types/IVec2d';
// import IndexEntry from '@/types/IndexEntry';
import { create } from 'zustand'


interface IArchStore {
    projectIsOpen: boolean,
    // previewIsVisible: boolean,
    // previewPostion: IVec2d,
    // selectedProject: string,
    // hoveredProject: string,
    // trackpointAnimateable: boolean,
    // projectIndexScrollY: number,
    // projectIndex: IndexEntry[],
    actions: {
        setProjectOpen: (open: boolean) => void;
        // showPreview: (on: boolean) => void;
        // setPosition: (newx: number, newy: number) => void;
        // setSelectedProject: (projectId: string) => void;
        // setHoveredProject: (projectId: string) => void;
        // setTrackpointAnimateable: (doAnimate: boolean) => void;
        // setProjectIndexScrollY: (offset: number) => void;
        // setProjectIndex: (projects: IndexEntry[]) => void;
    }
}

type State = {
    isProjectOpen: boolean;
}

type Action = {
    setProjectOpen: (open: boolean) => void;
}

const useArchStore = create<State & Action>()(
    (set) => ({
        isProjectOpen: false,
        setProjectOpen: (open) => set((state) => ({isProjectOpen: open}))
    })
)

export default useArchStore;
// const useArchStore = create<IArchStore>()((set) => ({
//     projectIsOpen: false,
//     actions: {
//         setProjectOpen: (open) => set((state) => ({projectIsOpen: open})),

//     }
// }));

// export const useArchProjectIsOpen = (): boolean => useArchStore((state) => state.projectIsOpen);

// export const useArchActions = () => useArchStore((state) => state.actions);