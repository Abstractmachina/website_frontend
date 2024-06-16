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

const useArchStore = create<IArchStore>()((set) => ({
    projectIsOpen: false,
    // previewIsVisible: false,
    // previewPostion: { x: 0, y: 0 },
    // selectedProject: 'none',
    // hoveredProject: 'none',
    // trackpointAnimateable: false,
    // projectIndexScrollY: 0,
    // projectIndex: [],
    actions: {
        setProjectOpen: (open) => set((state) => ({projectIsOpen: open})),
        // showPreview: (on) => set((state) => ({ previewIsVisible: on })),
        // setPosition: (newx, newy) => set((state) => ({ previewPostion: { x: newx, y: newy } })),
        // setSelectedProject: (projectId) => set((state) => ({ selectedProject: projectId })),
        // setHoveredProject: (projectId) => set((state) => ({ hoveredProject: projectId })),
        // setTrackpointAnimateable: (doAnimate) => set((state) => ({ trackpointAnimateable: doAnimate })),
        // setProjectIndexScrollY: (offset) => set((state) => ({ projectIndexScrollY: offset })),
        // setProjectIndex: (projects) => set ((state) => ({projectIndex: projects})),
    }
}));

export const useArchProjectIsOpen = (): boolean => useArchStore((state) => state.projectIsOpen);
// export const useArchPreviewVisibility = () : boolean => useArchStore((state) => state.previewIsVisible);
// export const useArchPreviewPosition = (): IVec2d => useArchStore((state) => state.previewPostion);
// export const useArchSelectedProject = () => useArchStore((state) => state.selectedProject);
// export const useArchHoveredProject = () => useArchStore((state) => state.hoveredProject);
// export const useArchTrackpointAnimateable = () => useArchStore((state) => state.trackpointAnimateable);
// export const useArchIndexScrollY = () => useArchStore((state) => state.projectIndexScrollY);
// export const useArchProjectIndex = () => useArchStore((state) => state.projectIndex);

export const useArchActions = () => useArchStore((state) => state.actions);