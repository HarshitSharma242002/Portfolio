// intro logic :
window.addEventListener('load', () => {
  const intro = document.getElementById('introSection');
  const mainSite = document.getElementById('mainSite');
  const topbar = document.getElementById('topbar');

  // After 14 seconds, fade out intro and show main UI
  setTimeout(() => {
    intro.classList.add('fade-out');
    setTimeout(() => {
      intro.style.display = 'none';
      topbar.classList.add('show');
      mainSite.classList.add('show');
      document.body.classList.add('unlocked');
    }, 1000); // Wait for fade animation
  }, 5000);
});



// certificate offcanvas logic : 
function openModal(imgSrc) {
  document.getElementById("certificateModal").style.display = "block";
  document.getElementById("modalImage").src = imgSrc;
}

function closeModal() {
  document.getElementById("certificateModal").style.display = "none";
}



// skills offcanvas logic : 
function openSkillModal(imgSrc) {
  document.getElementById("skillsmodal").style.display = "block";
  document.getElementById("modalImage").src = imgSrc;
}

function closeSkillModal() {
  document.getElementById("skillsmodal").style.display = "none";
}

function skillname(skillName, experience, projects, details) {
  document.getElementById("skill-name").innerHTML = 'Skill Name : ' + skillName;
  document.getElementById("experience").innerHTML = 'Experience : ' + experience;
  document.getElementById("projects").innerHTML = 'Projects : ' + projects;
  document.getElementById("details").innerHTML = 'Details : <br>' + details;
}



// Combined window.onclick (prevents overwrite)
window.onclick = function (event) {
  let modal1 = document.getElementById("certificateModal");
  let modal2 = document.getElementById("skillsmodal");

  if (event.target === modal1) {
    closeModal();
  }
  if (event.target === modal2) {
    closeSkillModal();
  }
};



// ****************************************************************************************************************
// ****************************************************************************************************************
// carousel js :  

const projectImages = {
  "Music-player": [
    "project-images/Music-player/img1.png",
    "project-images/Music-player/img2.png",
    "project-images/Music-player/img3.png",
    "project-images/Music-player/img4.png",
    "project-images/Music-player/img5.png",
    "project-images/Music-player/img6.png"
  ],
  "e-service": [
    "project-images/e-service/image (6).png",
    "project-images/e-service/image (7).png",
    "project-images/e-service/image (8).png",
    "project-images/e-service/image (9).png",
    "project-images/e-service/image (10).png",
    "project-images/e-service/image (11).png",
    "project-images/e-service/image (12).png",
    "project-images/e-service/image (13).png",
  ],
  "smart-facality-management": [
    "project-images/smart-facality-management/image (6).png",
    "project-images/smart-facality-management/image (7).png",
    "project-images/smart-facality-management/image (8).png",
    "project-images/smart-facality-management/image (9).png",
    "project-images/smart-facality-management/image (10).png",
    "project-images/smart-facality-management/image (11).png",
    "project-images/smart-facality-management/image (12).png",
    "project-images/smart-facality-management/image (13).png",
    "project-images/smart-facality-management/image (14).png",
    "project-images/smart-facality-management/image (15).png",
    "project-images/smart-facality-management/image (16).png",
    "project-images/smart-facality-management/image (17).png"
  ],
  "Hrms": [
    "project-images/Hrms/img1.png",
    "project-images/Hrms/img2.png",
    "project-images/Hrms/img3.png",
    "project-images/Hrms/img4.png",
    "project-images/Hrms/img5.png",
    "project-images/Hrms/img6.png",
    "project-images/Hrms/img7.png",
    "project-images/Hrms/img8.png"
  ],
  "Marvel": [
    "project-images/Marvel/img1.png",
    "project-images/Marvel/img2.png",
    "project-images/Marvel/img3.png",
    "project-images/Marvel/img4.png",
    "project-images/Marvel/img5.png",
    "project-images/Marvel/img6.png",
    "project-images/Marvel/img7.png",
    "project-images/Marvel/img8.png",
    "project-images/Marvel/img9.png",
    "project-images/Marvel/img10.png",
    "project-images/Marvel/img11.png",
    "project-images/Marvel/img12.png"
  ],
  "Squid-games": [
    "project-images/Squid-games/img1.png",
    "project-images/Squid-games/img2.png",
    "project-images/Squid-games/img3.png",
    "project-images/Squid-games/img4.png",
    "project-images/Squid-games/img5.png",
    "project-images/Squid-games/img6.png",
    "project-images/Squid-games/img7.png",
    "project-images/Squid-games/img8.png",
    "project-images/Squid-games/img9.png"
  ],
  "Insurance-app": [
    "project-images/Insurance-app/img1.png",
    "project-images/Insurance-app/img2.png",
    "project-images/Insurance-app/img3.png",
    "project-images/Insurance-app/img4.png",
    "project-images/Insurance-app/img5.png",
    "project-images/Insurance-app/img6.png",
    "project-images/Insurance-app/img7.png",
    "project-images/Insurance-app/img8.png"
  ],
  "Lamborgini": [
    "project-images/Lamborgini/img1.png",
    "project-images/Lamborgini/img2.png",
    "project-images/Lamborgini/img3.png",
    "project-images/Lamborgini/img4.png",
    "project-images/Lamborgini/img5.png",
    "project-images/Lamborgini/img6.png"
  ]
};

function openProjectModal(projectId, projName, tool, duration, details) {
  document.getElementById("skillsmodal").style.display = "block";

  document.getElementById("skill-name").innerHTML = "Project Name : " + projName;
  document.getElementById("experience").innerHTML = "Tool Used : " + tool;
  document.getElementById("projects").innerHTML = "Duration : " + duration;
  document.getElementById("details").innerHTML = "Details: <br>" + details;

  const wrap = document.querySelector(".slider_wrap");
  wrap.innerHTML = "";

  if (projectImages[projectId]) {
    projectImages[projectId].forEach(src => {
      const div = document.createElement("div");
      div.classList.add("slider_item");
      // NOTE: added draggable="false" to prevent native image drag interference
      div.innerHTML = `<figure><img src="${src}" alt="" draggable="false"></figure>`;
      wrap.appendChild(div);
    });
  }

  // If you don't have a scroll library, REMOVE this line:
  // scroll.calculate();

  // Ensure slider listeners are initialized (safe to call multiple times)
  initSliderPointerDragging();
}



// ================================
// SLIDER: robust pointer event dragging (mouse + touch)
// ================================
let sliderPointerInit = false; // ensure listeners added only once

function initSliderPointerDragging() {
  if (sliderPointerInit) return;
  sliderPointerInit = true;

  const sliderWrap = document.querySelector(".slider_wrap");
  if (!sliderWrap) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  // Prevent text/image selection while dragging
  function addNoSelect() {
    document.body.classList.add('no-select');
  }
  function removeNoSelect() {
    document.body.classList.remove('no-select');
  }

  // pointerdown is best because it unifies mouse/touch/pen
  sliderWrap.addEventListener('pointerdown', (e) => {
    isDown = true;
    // capture pointer so we continue to receive pointer events even if it leaves the element
    sliderWrap.setPointerCapture(e.pointerId);
    startX = e.clientX - sliderWrap.offsetLeft;
    scrollLeft = sliderWrap.scrollLeft;
    sliderWrap.classList.add('active'); // optional for styling (grabbing cursor)
    addNoSelect();
  });

  // pointermove - only if dragging
  sliderWrap.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.clientX - sliderWrap.offsetLeft;
    const walk = (x - startX) * 1.8; // sensitivity (tweakable)
    sliderWrap.scrollLeft = scrollLeft - walk;
  });

  // pointerup & pointercancel & lostpointercapture to stop dragging
  const endDrag = (e) => {
    if (!isDown) return;
    isDown = false;
    // release pointer capture safely if possible
    try {
      sliderWrap.releasePointerCapture && sliderWrap.releasePointerCapture(e && e.pointerId);
    } catch (err) {/* ignore */ }
    sliderWrap.classList.remove('active');
    removeNoSelect();
  };

  sliderWrap.addEventListener('pointerup', endDrag);
  sliderWrap.addEventListener('pointercancel', endDrag);
  // also listen on window to guarantee we stop dragging if pointer released outside
  window.addEventListener('pointerup', endDrag);
}




// mobile menu: 

const mob_menu = document.getElementById('mob-menu');
const mob_menu_close = document.getElementById('mob-menu-close');

// OPEN menu
mob_menu.addEventListener('click', () => {
  document.getElementById("mobile-menu").classList.add("active");
});

// CLOSE menu
mob_menu_close.addEventListener('click', () => {
  document.getElementById("mobile-menu").classList.remove("active");
});



// Project counter : 
(function() {
  function startDetailBoxCounters() {
    const boxes = document.querySelectorAll('.project-counter');

    boxes.forEach(box => {
      // prefer the h1 inside the box, fallback to any element with .project-count
      const counterEl = box.querySelector('h1') || box.querySelector('.project-count');
      if (!counterEl) return; // nothing to animate

      // Check data-value on the h1 first, then on the .detail-box
      const raw = counterEl.getAttribute('data-value') ?? box.getAttribute('data-value');
      const finalValue = Math.max(0, parseInt(raw) || 0);

      // If finalValue is 0, just show "0+" and skip animation
      if (finalValue === 0) {
        counterEl.innerText = '0+';
        return;
      }

      let current = 0;
      const duration = 1000;           // total animation time in ms
      const steps = finalValue;        // one step per integer
      // avoid extremely tiny intervals
      const interval = Math.max(20, Math.round(duration / steps));

      const timer = setInterval(() => {
        current += 1;
        if (current >= finalValue) {
          current = finalValue;
          clearInterval(timer);
        }
        counterEl.innerText = current + '+';
      }, interval);
    });
  }

  // Wait for page load then 5.2s loader delay (adjust if your loader hides earlier)
  window.addEventListener('load', () => {
    setTimeout(startDetailBoxCounters, 5200);
  });
})();


// year counter :
function animateYearCounter() {
  const startDate = new Date("2023-03-01");
  const today = new Date();

  const diffMs = today - startDate;
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  const finalValue = parseFloat(diffYears.toFixed(1)); // one decimal place

  let currentValue = 0;
  const duration = 1500; // animation duration
  const steps = 60;
  const increment = finalValue / steps;
  const interval = duration / steps;

  const counter = setInterval(() => {
    currentValue += increment;

    if (currentValue >= finalValue) {
      currentValue = finalValue;
      clearInterval(counter);
    }

    document.getElementById("yearCounter").innerText =
      currentValue.toFixed(1) + " Years";
  }, interval);
}

// Delay animation by 5.2 seconds
window.onload = () => {
  setTimeout(animateYearCounter, 5200);
};

document.getElementById("currentYear").textContent = new Date().getFullYear();