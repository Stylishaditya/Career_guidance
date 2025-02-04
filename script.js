document.addEventListener("DOMContentLoaded", () => {
  const resumeBuildingBtn = document.getElementById("resumeBuilding")
  const selectedToolText = document.getElementById("selectedTool")

  resumeBuildingBtn.addEventListener("click", () => {
    selectedToolText.textContent = "You selected: Resume Building"
    // Here you would typically navigate to a new page or open a modal
    // For this example, we'll just update the text
  })

  // Note: We don't need to handle the click for careerGuidance anymore
  // as it's now an <a> tag that opens in a new tab
})

