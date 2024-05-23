import TaskThree from "@/app/components/taskThree";
import TaskOne from "@/app/components/taskone";
import TaskTwo from "@/app/components/tasktwo";

export default function page({params} : {params: {details: string}}) {
    
    return (
      <div>
        {params.details == '1' && <TaskOne/>}
        {params.details == '2' && <TaskTwo/>}
        {params.details == '3' && <TaskThree />}
      </div>
    );
  }

