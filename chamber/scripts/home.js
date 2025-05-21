const membersDataURL = 'scripts/members.json';
let allMembers = [];

async function getMemberData() {
    try {
        const response = await fetch(membersDataURL);
        if (response.ok) {
            const data = await response.json();
            allMembers = data;
            displayMembers(allMembers);
            setupFilterButtons();
            setupViewToggleButtons();
        } else {
            console.error('Error fetching member data:', response.status, response.statusText);
        }
    } catch (error) {
        console.error("Fetch API failed:", error);
    }
}
