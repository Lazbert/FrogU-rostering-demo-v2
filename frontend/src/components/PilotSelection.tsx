import { useState } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PilotProps } from "@/main.tsx"

interface PilotSelectionProps {
    recommendedPilots: Array<PilotProps>
    setSelectedPilot: React.Dispatch<React.SetStateAction<PilotProps | undefined>>
}

export const PilotSelection: React.FC<PilotSelectionProps> = ({
    recommendedPilots,
    setSelectedPilot
}) => {
    const [expanded, setExpanded] = useState<number>(-1);
    const handleChange = (acc: number) => (_: any, isExpanded: boolean) => {
        setExpanded(isExpanded ? acc : -1);
    };
    
    return (
        <div className="w-full">
            {recommendedPilots.map((pilot, ind) => {
                return (
                    <Accordion expanded={expanded === ind} onChange={handleChange(ind)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography className="text-[16px]">{pilot.displayName}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="flex flex-col gap-1">
                            <span>• Seniority (hr): {pilot.seniority}</span>
                            <span>• Contact Email: {pilot.contactEmail}</span>
                            <span>• Home Country: {pilot.baseCountry}</span>
                            <input type="checkbox" className="w-[20px] h-[20px] self-end" onClick={() => setSelectedPilot(pilot)} />
                        </AccordionDetails>
                    </Accordion>
                )
            })}   
        </div>
    )
}

export default PilotSelection;