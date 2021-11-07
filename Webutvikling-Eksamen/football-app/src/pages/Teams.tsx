import TeamList from "../components/team/TeamList";
import { TeamProvider } from "../contexts/team/TeamContext";

const Teams = () => {
  return (
    <div>
      <TeamProvider>
        <TeamList />
      </TeamProvider>
    </div>
  );
};

export default Teams;
