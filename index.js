
async function getRepositories() {
  const username = document.getElementById('username-input').value;
  const url = `https://api.github.com/users/${username}/repos`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('GitHub API request failed');
    }
    const data = await response.json();
    displayRepositories(data);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    alert('Failed to fetch repositories. Please check your input and try again.');
  }
}

function displayRepositories(repositories) {
  const container = document.getElementById('repositories-container');
  container.innerHTML = ''; // Clear previous results
  
  repositories.forEach(repo => {
    const repoElement = document.createElement('div');
    repoElement.innerHTML = `
      <p><strong>Name:</strong> ${repo.name}</p>
      <p><strong>Description:</strong> ${repo.description || 'No description'}</p>
      <p><strong>URL:</strong> <a href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>
      <hr>
    `;
    container.appendChild(repoElement);
  });
}
