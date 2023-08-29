import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { StyledContainer } from '../components/styles';
import { getProjectInfo } from '../api/projectApi';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import NavBar from '../components/NavBar';
import CreateProject from '../components/CreateProject';
import ProjectInfo from '../components/ProjectInfo';
import TaskCard from '../components/TaskCard';

const TaskHome = ({ route, navigation }) => {
  const { id } = route.params;
  const user = useSelector((state) => state.user);
  const token = user.userInfo.token;
  const [projectData, setProjectData] = useState({});
  //logic
  const { isLoading, data, refetch } = useQuery({
    queryKey: 'getProjectInfo',
    queryFn: () => getProjectInfo(id, token),
  });
  useEffect(() => {
    if (data && data.data) {
      setProjectData(data.data.data);
      const interval = setInterval(() => {
        refetch();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [data]);

  //created at
  const createdAt = projectData.createdAt;
  const currentTime = new Date().getTime();
  const createdAtTime = new Date(createdAt).getTime();
  const timeDiff = currentTime - createdAtTime;
  const timeDiffInHours = Math.floor(timeDiff / (1000 * 3600));

  return (
    <StyledContainer>
      <NavBar name={user.userInfo.fullName} navigation={navigation} />
      {projectData.usersId && !isLoading && (
        <ProjectInfo
          nomProjet={projectData.name}
          description={projectData.description}
          tempsCreation={timeDiffInHours}
          cle={projectData.key}
          utilisateurs={projectData.usersId}
        />
      )}
      <CreateProject type="task" id={id} />
      {projectData.tasks && !isLoading && (
        <View style={{ marginBottom: 30 }}>
          {projectData.tasks
            .slice()
            .reverse()
            .map((task) => (
              <TaskCard key={task._id} name={task.title} date={task.createdAt} id={task._id} navigation={navigation} />
            ))}
        </View>
      )}
    </StyledContainer>
  );
};

export default TaskHome;
