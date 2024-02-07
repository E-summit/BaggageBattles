import React, { useState } from 'react';

const TeamForm = () => {
  const [teamName, setTeamName] = useState('');
  const [teamSize, setTeamSize] = useState(3);
  const [teamMembers, setTeamMembers] = useState([]);

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleTeamSizeChange = (e) => {
    setTeamSize(parseInt(e.target.value, 10));
  };

  const handleMemberInfoChange = (index, field, value) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index][field] = value;
    setTeamMembers(updatedMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Team Name:', teamName);
    console.log('Team Size:', teamSize);
    console.log('Team Members:', teamMembers);
  };

  const renderMemberFields = () => {
    const memberFields = [];

    for (let i = 0; i < teamSize; i++) {
      memberFields.push(
        <div key={i}>
          <h2 className="text-lg font-bold text-black mt-4">Team Member {i + 1}</h2>
          <div className="mb-4">
            <label htmlFor={`name${i}`} className="block text-sm font-bold text-black">
              Name
            </label>
            <input
              type="text"
              id={`name${i}`}
              name={`name${i}`}
              value={teamMembers[i]?.name || ''}
              onChange={(e) => handleMemberInfoChange(i, 'name', e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor={`rollNo${i}`} className="block text-sm font-bold text-black">
              Roll No
            </label>
            <input
              type="text"
              id={`rollNo${i}`}
              name={`rollNo${i}`}
              value={teamMembers[i]?.rollNo || ''}
              onChange={(e) => handleMemberInfoChange(i, 'rollNo', e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor={`email${i}`} className="block text-sm font-bold text-black">
              Email
            </label>
            <input
              type="email"
              id={`email${i}`}
              name={`email${i}`}
              value={teamMembers[i]?.email || ''}
              onChange={(e) => handleMemberInfoChange(i, 'email', e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
        </div>
      );
    }

    return memberFields;
  };

  return (
    <div className="bg-black flex items-center justify-center mx-auto">
      <form onSubmit={handleSubmit} className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 w-full p-8 md:px-6 sm:px-2 shadow-lg rounded-md max-w-md md:mx-0 sm:mx-0">
        <h1 className="text-2xl font-bold text-center text-black mb-4">Team Information</h1>

        <div className="mb-4">
          <label htmlFor="teamName" className="block text-sm font-bold text-black">
            Team Name
          </label>
          <input
            type="text"
            id="teamName"
            name="teamName"
            value={teamName}
            onChange={handleTeamNameChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="teamSize" className="block text-sm font-bold text-black">
            Team Size
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={teamSize}
            onChange={handleTeamSizeChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          >
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        {renderMemberFields()}

        <button type="submit" className="text-white bg-black px-4 py-2 rounded-md">
          Submit
        </button>
        <button type="submit" className="text-white px-4 bg-black py-2 ml-5 rounded-md">
          Home
        </button>
      </form>
    </div>
  );
};

export default TeamForm;
