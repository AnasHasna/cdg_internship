import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonText, CreateProjectText, InnerContainer, StyledButton, StyledContainer } from '../components/styles';
import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';
import CreateProject from '../components/CreateProject';
import ProjectDetail from '../components/ProjectDetail';
import { useQuery } from 'react-query';
import { getProjects } from '../api/projectApi';
import AddUserToProject from '../components/AddUserToProject';

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const [projectData, setProjectData] = useState([]);
  const id = user.userInfo._id;
  const token = user.userInfo.token;

  //logic
  const { isLoading, data, refetch } = useQuery({
    queryKey: 'projects',
    queryFn: () => getProjects(id, token),
  });
  useEffect(() => {
    if (data) {
      setProjectData(data.data.data);
      const interval = setInterval(() => {
        refetch();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [data]);

  return (
    <StyledContainer>
      <NavBar name={user.userInfo.fullName} navigation={navigation} />
      <CreateProject />
      <AddUserToProject />
      <InnerContainer>
        <CreateProjectText>Mes Projets</CreateProjectText>
        {projectData
          .slice()
          .reverse()
          .map((project) => (
            <ProjectDetail
              key={project._id}
              name={project.name}
              nbUsers={project.usersId.length}
              navigation={navigation}
              id={project._id}
              nbTasks={project.tasks.length}
            />
          ))}
      </InnerContainer>
    </StyledContainer>
  );
};

export default Home;
