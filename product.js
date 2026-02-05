// ============================================
// PERSISTENCE HELPER FUNCTION (NEW - minimal addition)
// ============================================
function saveProductsToStorage() {
    localStorage.setItem('pharmacyProducts', JSON.stringify(DUMMY_PRODUCTS));
}

// ============================================
// Dummy data for testing (replaces backend API)
// ============================================
// Load from localStorage if available, otherwise use original dummy data
let DUMMY_PRODUCTS = JSON.parse(localStorage.getItem('pharmacyProducts')) || [
    {
        productId: 1,
        sku: "SKU-MED001",
        productName: "Paracetamol 500mg",
        productCategory: "Over-the-Counter (OTC) Medicines",
        productSubCategory: "Fever & Flu",
        brandName: "Cipla",
        productQuantity: 150,
        unit: "Tablet Strip",
        productPrice: [25.99],
        productOldPrice: [29.99],
        productStatus: "Available",
        prescriptionRequired: false,
        productDescription: "Effective relief from fever and mild to moderate pain.",
        mfgDate: "2024-01-15",
        expDate: "2026-01-15",
        batchNo: "BATCH-2024-001",
        rating: 4.5,
        benefitsList: ["Reduces fever", "Relieves pain", "Fast acting"],
        ingredientsList: ["Paracetamol 500mg"],
        directionsList: ["Take 1-2 tablets every 4-6 hours as needed", "Do not exceed 8 tablets in 24 hours"],
        productSizes: ["Strip of 10", "Bottle of 100"],
        productMainImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=150&h=150&fit=crop&crop=center",
        productSubImages: [
            "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=150&h=150&fit=crop",
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&h=150&fit=crop"
        ],
        approved: true,
        createdAt: "2024-01-20T10:30:00"
    },
    {
        productId: 2,
        sku: "SKU-VIT002",
        productName: "Vitamin C 1000mg",
        productCategory: "Wellness",
        productSubCategory: "Vitamins & Supplements",
        brandName: "Nature's Bounty",
        productQuantity: 8,
        unit: "Tablet Bottle",
        productPrice: [499.99, 899.99],
        productOldPrice: [599.99, 999.99],
        productStatus: "Available",
        prescriptionRequired: false,
        productDescription: "High potency Vitamin C supplements for immune support.",
        mfgDate: "2023-12-01",
        expDate: "2024-12-01",
        batchNo: "BATCH-VC-2023",
        rating: 4.2,
        benefitsList: ["Boosts immunity", "Antioxidant protection", "Collagen production"],
        ingredientsList: ["Vitamin C 1000mg", "Rose Hips", "Bioflavonoids"],
        directionsList: ["Take one tablet daily with food", "Do not exceed recommended dosage"],
        productSizes: ["30 tablets", "60 tablets"],
        productMainImage: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=150&h=150&fit=crop&crop=center",
        productSubImages: [],
        approved: null,
        createdAt: "2024-01-22T14:15:00"
    },
    {
        productId: 3,
        sku: "SKU-DIA003",
        productName: "Glucometer Kit",
        productCategory: "Monitoring Devices (BP Monitors, Glucometers)",
        productSubCategory: "Glucometers & Test Strips",
        brandName: "Accu-Chek",
        productQuantity: 25,
        unit: "Kit",
        productPrice: [1299.99],
        productOldPrice: [1499.99],
        productStatus: "Available",
        prescriptionRequired: false,
        productDescription: "Digital glucometer with test strips for accurate blood sugar monitoring.",
        mfgDate: "2023-11-10",
        expDate: "2025-11-10",
        batchNo: "BATCH-GM-2023",
        rating: 4.7,
        benefitsList: ["Accurate readings", "Fast results", "Memory function"],
        ingredientsList: ["Digital meter", "Test strips", "Lancets"],
        directionsList: ["Insert test strip", "Prick finger with lancet", "Apply blood to strip", "Read result"],
        productSizes: ["Basic Kit", "Deluxe Kit"],
        productMainImage: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=150&h=150&fit=crop&crop=center",
        productSubImages: [
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=150&h=150&fit=crop",
            "https://images.unsplash.com/photo-1585435557343-3b092031d5c5?w=150&h=150&fit=crop"
        ],
        approved: true,
        createdAt: "2024-01-18T09:45:00"
    },
    {
        productId: 4,
        sku: "SKU-SUR004",
        productName: "Surgical Face Mask",
        productCategory: "Surgical Items",
        productSubCategory: "Surgical Consumables",
        brandName: "MediSafe",
        productQuantity: 0,
        unit: "Pack",
        productPrice: [199.99],
        productOldPrice: [249.99],
        productStatus: "Unavailable",
        prescriptionRequired: false,
        productDescription: "3-ply surgical face mask for protection against airborne particles.",
        mfgDate: "2023-10-05",
        expDate: "2025-10-05",
        batchNo: "BATCH-MASK-2023",
        rating: 4.0,
        benefitsList: ["3-layer protection", "Comfortable ear loops", "Adjustable nose bridge"],
        ingredientsList: ["Non-woven fabric", "Melt-blown filter", "Nose wire"],
        directionsList: ["Wash hands before use", "Place mask over nose and mouth", "Secure ear loops"],
        productSizes: ["Pack of 10", "Pack of 50"],
        productMainImage: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=150&h=150&fit=crop&crop=center",
        productSubImages: [],
        approved: true,
        createdAt: "2024-01-25T11:20:00"
    },
    {
        productId: 5,
        sku: "SKU-ANT005",
        productName: "Amoxicillin 500mg",
        productCategory: "Prescription Medicines (Upload Prescription)",
        productSubCategory: "Antibiotics",
        brandName: "Sun Pharma",
        productQuantity: 45,
        unit: "Capsule Strip",
        productPrice: [89.99],
        productOldPrice: [99.99],
        productStatus: "Available",
        prescriptionRequired: true,
        productDescription: "Broad spectrum antibiotic for bacterial infections.",
        mfgDate: "2024-02-01",
        expDate: "2025-02-01",
        batchNo: "BATCH-AMX-2024",
        rating: 4.3,
        benefitsList: ["Treats bacterial infections", "Broad spectrum", "Effective"],
        ingredientsList: ["Amoxicillin Trihydrate 500mg"],
        directionsList: ["Take as prescribed by doctor", "Usually 1 capsule every 8 hours", "Complete full course"],
        productSizes: ["Strip of 10"],
        productMainImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=150&h=150&fit=crop&crop=center",
        productSubImages: [],
        approved: false,
        createdAt: "2024-02-05T13:40:00"
    },
    {
        productId: 6,
        sku: "SKU-FIT006",
        productName: "Protein Powder",
        productCategory: "Wellness",
        productSubCategory: "Fitness & Weight",
        brandName: "MuscleBlaze",
        productQuantity: 12,
        unit: "Container",
        productPrice: [2499.99, 4599.99],
        productOldPrice: [2999.99, 5199.99],
        productStatus: "Available",
        prescriptionRequired: false,
        productDescription: "Whey protein powder for muscle recovery and growth.",
        mfgDate: "2024-01-10",
        expDate: "2025-07-10",
        batchNo: "BATCH-PRO-2024",
        rating: 4.8,
        benefitsList: ["Muscle building", "Recovery support", "High protein"],
        ingredientsList: ["Whey Protein Concentrate", "Natural Flavors", "Stevia"],
        directionsList: ["Mix 1 scoop with water or milk", "Consume post-workout", "Do not exceed 2 scoops daily"],
        productSizes: ["1kg", "2kg"],
        productMainImage: "https://images.unsplash.com/photo-1537202108838-e7072bad1927?w=150&h=150&fit=crop&crop=center",
        productSubImages: [
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=150&fit=crop",
            "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=150&h=150&fit=crop"
        ],
        approved: true,
        createdAt: "2024-01-28T16:10:00"
    },
    {
        productId: 7,
        sku: "SKU-BP007",
        productName: "Digital BP Monitor",
        productCategory: "Monitoring Devices (BP Monitors, Glucometers)",
        productSubCategory: "Blood Pressure Monitors",
        brandName: "Omron",
        productQuantity: 18,
        unit: "Unit",
        productPrice: [2999.99],
        productOldPrice: [3499.99],
        productStatus: "Available",
        prescriptionRequired: false,
        productDescription: "Automatic digital blood pressure monitor with large display.",
        mfgDate: "2023-12-20",
        expDate: "2026-12-20",
        batchNo: "BATCH-BP-2023",
        rating: 4.6,
        benefitsList: ["Accurate readings", "Memory function", "Irregular heartbeat detector"],
        ingredientsList: ["Digital unit", "Cuff", "Batteries"],
        directionsList: ["Sit comfortably", "Wrap cuff around arm", "Press start button", "Read results"],
        productSizes: ["Standard Cuff"],
        productMainImage: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=150&h=150&fit=crop&crop=center",
        productSubImages: [],
        approved: true,
        createdAt: "2024-01-30T10:00:00"
    },
    {
        productId: 8,
        sku: "SKU-HER008",
        productName: "Ashwagandha Capsules",
        productCategory: "LifeStyle Disorder",
        productSubCategory: "General Wellness",
        brandName: "Himalaya",
        productQuantity: 3,
        unit: "Bottle",
        productPrice: [399.99],
        productOldPrice: [449.99],
        productStatus: "Low Stock",
        prescriptionRequired: false,
        productDescription: "Ayurvedic supplement for stress relief and energy.",
        mfgDate: "2023-09-15",
        expDate: "2024-09-15",
        batchNo: "BATCH-ASH-2023",
        rating: 4.4,
        benefitsList: ["Reduces stress", "Boosts energy", "Improves sleep"],
        ingredientsList: ["Ashwagandha root extract", "Gelatin capsules"],
        directionsList: ["Take 1-2 capsules daily", "With water after meals"],
        productSizes: ["60 capsules"],
        productMainImage: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=150&h=150&fit=crop&crop=center",
        productSubImages: [],
        approved: null,
        createdAt: "2024-02-01T14:30:00"
    },
    {
        productId: 9,
        sku: "SKU-FER009",
        productName: "Folic Acid Tablets",
        productCategory: "Fertility Essentials",
        productSubCategory: "Female Infertility",
        brandName: "Folvite",
        productQuantity: 60,
        unit: "Tablet Strip",
        productPrice: [149.99],
        productOldPrice: [179.99],
        productStatus: "Available",
        prescriptionRequired: true,
        productDescription: "Essential vitamin for women planning pregnancy.",
        mfgDate: "2024-01-05",
        expDate: "2026-01-05",
        batchNo: "BATCH-FA-2024",
        rating: 4.1,
        benefitsList: ["Prevents birth defects", "Supports fetal development", "Essential for pregnancy"],
        ingredientsList: ["Folic Acid 5mg"],
        directionsList: ["Take as prescribed by doctor", "Usually 1 tablet daily"],
        productSizes: ["Strip of 30"],
        productMainImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=150&h=150&fit=crop&crop=center",
        productSubImages: [],
        approved: true,
        createdAt: "2024-01-15T09:15:00"
    },
    {
        productId: 10,
        sku: "SKU-MOB010",
        productName: "Walking Stick",
        productCategory: "Mobility Aids (Walkers, Wheelchairs)",
        productSubCategory: "Walkers & Walking Sticks",
        brandName: "Drive Medical",
        productQuantity: 22,
        unit: "Piece",
        productPrice: [799.99],
        productOldPrice: [899.99],
        productStatus: "Available",
        prescriptionRequired: false,
        productDescription: "Adjustable walking stick with comfortable handle.",
        mfgDate: "2023-11-30",
        expDate: "2028-11-30",
        batchNo: "BATCH-WS-2023",
        rating: 4.0,
        benefitsList: ["Adjustable height", "Non-slip tip", "Lightweight aluminum"],
        ingredientsList: ["Aluminum shaft", "Rubber tip", "Ergonomic handle"],
        directionsList: ["Adjust to appropriate height", "Use on stable surfaces"],
        productSizes: ["Adjustable 32-38 inches"],
        productMainImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=150&h=150&fit=crop&crop=center",
        productSubImages: [],
        approved: true,
        createdAt: "2024-01-12T11:45:00"
    },
    {
        productId: 11,
        sku: "SKU-NEB011",
        productName: "Nebulizer Machine",
        productCategory: "Respiratory Care (Nebulizers, Oxygen)",
        productSubCategory: "Nebulizers & Accessories",
        brandName: "Phillips",
        productQuantity: 7,
        unit: "Unit",
        productPrice: [3499.99],
        productOldPrice: [3999.99],
        productStatus: "Available",
        prescriptionRequired: true,
        productDescription: "Portable nebulizer for asthma and respiratory conditions.",
        mfgDate: "2023-10-25",
        expDate: "2026-10-25",
        batchNo: "BATCH-NEB-2023",
        rating: 4.7,
        benefitsList: ["Portable", "Quiet operation", "Fast medication delivery"],
        ingredientsList: ["Nebulizer unit", "Mask", "Tubing", "Medication cup"],
        directionsList: ["Add medication to cup", "Connect tubing and mask", "Turn on and breathe normally"],
        productSizes: ["Portable unit"],
        productMainImage: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=150&h=150&fit=crop&crop=center",
        productSubImages: [
            "https://images.unsplash.com/photo-1585435557343-3b092031d5c5?w=150&h=150&fit=crop",
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&h=150&fit=crop"
        ],
        approved: true,
        createdAt: "2024-01-08T15:20:00"
    },
    {
        productId: 12,
        sku: "SKU-OINT012",
        productName: "Antiseptic Ointment",
        productCategory: "Over-the-Counter (OTC) Medicines",
        productSubCategory: "Ointments",
        brandName: "Betadine",
        productQuantity: 0,
        unit: "Tube",
        productPrice: [129.99],
        productOldPrice: [149.99],
        productStatus: "Out of Stock",
        prescriptionRequired: false,
        productDescription: "Topical antiseptic for minor cuts and wounds.",
        mfgDate: "2023-08-12",
        expDate: "2025-08-12",
        batchNo: "BATCH-OINT-2023",
        rating: 4.2,
        benefitsList: ["Prevents infection", "Promotes healing", "Soothes skin"],
        ingredientsList: ["Povidone-Iodine 5%", "Petroleum base"],
        directionsList: ["Clean wound", "Apply thin layer", "Cover with bandage if needed"],
        productSizes: ["15g tube", "30g tube"],
        productMainImage: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=150&h=150&fit=crop&crop=center",
        productSubImages: [],
        approved: false,
        createdAt: "2024-01-05T12:10:00"
    }
];

// ============================================
// Comprehensive Category Structure with Subcategories
// ============================================
const categoryStructure = {
    "Prescription Medicines (Upload Prescription)": [
        "Allergy and Fever",
        "Antibiotics",
        "Liver & Kidney Care",
        "Stomach Care & Digestion",
        "Skin Medicines",
        "Other"
    ],
  
    "Wellness": [
        "Vitamins & Supplements",
        "Skin & Hair Care",
        "Fitness & Weight",
        "Immunity Boosters",
        "Senior Care",
        "Oral Care",
        "Menstrual Care",
    ],
  
    "Over-the-Counter (OTC) Medicines": [
        "Ayurvedic Medicines",
        "Allergy",
        "Fever & Flu",
        "Pain Relief",
        "Ointments",
        "Health Supplements",
    ],
  
    "LifeStyle Disorder": [
        "Diabetes Care",
        "Heart & Blood Pressure",
        "Thyroid Support",
        "Vitamins & Supplements",
        "Nutritional Support",
        "General Wellness",
    ],
  
    "Fertility Essentials" : [
        "Male Infertility",
        "Female Infertility",
        "Ayurvedic Supplements",
        "Vitamins & Minerals",
        "Herbal Teas & Powders",
    ],
  
    "Monitoring Devices (BP Monitors, Glucometers)" : [
        "Blood Pressure Monitors",
        "Glucometers & Test Strips",
        "Thermometers",
        "Pulse Oximeters"
    ],
  
    "Mobility Aids (Walkers, Wheelchairs)" : [
        "Wheelchair",
        "Walkers & Walking Sticks",
        "Crutches",
        "Support Belts & Braces"
    ],
  
    "Respiratory Care (Nebulizers, Oxygen)" : [
        "Nebulizers & Accessories",
        "Vaporizers & Steam Inhalers",
        "Oxygen Cylinders & Concentrators",
        "CPAP/BIPAP Machines"
    ],
  
    "Surgical Items" : [
        "Dressings & Bandages",
        "Surgical Consumables",
        "IV & Infusion Items",
        "Catheters & Tubes",
        "Wound Care",
        "Orthopedic Support",
        "IV Fluids",
        "Surgical Kits",
    ]
};

// ============================================
// Global Variables
// ============================================
let currentProductId = null;
let allCategories = [];
let allSubcategories = [];
const today = new Date();
// Pagination variables
let currentPage = 1;
let pageSize = 10; // Default to 10 entries
let totalProducts = 0;
let filteredProducts = [];
let allProducts = []; // Store ALL products
let searchTerm = ''; // Store current search term
// Price Management variable
let priceItemsCount = 0;
// Barcode variables
let selectedProductsForBarcode = [];

// ============================================
// PRICE MANAGEMENT FUNCTIONS (unchanged)
// ============================================
function setupPriceManagement() {
    console.log('Setting up price management...');
  
    // Only run if edit modal is visible
    const modal = document.getElementById('editProductModal');
    if (!modal || modal.style.display !== 'flex') {
        console.warn('Edit modal not visible, skipping price management setup');
        return;
    }
  
    // Find elements
    const addButton = document.querySelector('.add-price-btn');
    const priceTypeSelect = document.getElementById('edit-price-type');
    const singlePriceSection = document.getElementById('single-price-section');
    const multiplePriceSection = document.getElementById('multiple-price-section');
    const singlePriceInputs = document.querySelectorAll('#single-price-section input[type="number"]');
  
    if (!addButton || !priceTypeSelect || !singlePriceSection || !multiplePriceSection) {
        console.warn('Price management elements not found in modal');
        return;
    }
  
    console.log('Setting up price management for visible modal');
  
    // Function to toggle required attributes for single price inputs
    function toggleSinglePriceRequired(isRequired) {
        singlePriceInputs.forEach(input => {
            if (isRequired) {
                input.setAttribute('required', 'required');
            } else {
                input.removeAttribute('required');
            }
        });
    }
  
    // Function to setup remove button event listener
    function setupRemoveButton(removeButton) {
        if (!removeButton) return;
      
        removeButton.addEventListener('click', function(e) {
            e.preventDefault();
            const row = this.closest('.price-item-row');
            if (row) {
                // Add fade out animation
                row.style.opacity = '0';
                row.style.transform = 'translateX(-20px)';
                row.style.transition = 'all 0.3s ease';
              
                setTimeout(() => {
                    row.remove();
                    console.log('Price item removed');
                }, 300);
            }
        });
    }
  
    // Function to setup all remove buttons
    function setupPriceItemEventListeners() {
        const removeButtons = document.querySelectorAll('.remove-price-btn');
        console.log('Setting up remove buttons:', removeButtons.length);
      
        removeButtons.forEach(button => {
            setupRemoveButton(button);
        });
    }
  
    // Set initial state - single price is visible by default
    toggleSinglePriceRequired(true);
  
    // Price type toggle
    priceTypeSelect.addEventListener('change', function() {
        console.log('Price type changed to:', this.value);
      
        if (this.value === 'multiple') {
            // Show multiple price section, hide single price
            singlePriceSection.style.display = 'none';
            multiplePriceSection.classList.remove('hidden');
          
            // Remove required from single price inputs (they're hidden)
            toggleSinglePriceRequired(false);
          
            // Setup event listeners for price items
            setTimeout(() => {
                setupPriceItemEventListeners();
            }, 50);
          
        } else {
            // Show single price section, hide multiple price
            singlePriceSection.style.display = 'block';
            multiplePriceSection.classList.add('hidden');
          
            // Add required to single price inputs (they're visible)
            toggleSinglePriceRequired(true);
        }
    });
  
    // Setup add button - clone to remove existing listeners
    const newAddButton = addButton.cloneNode(true);
    addButton.parentNode.replaceChild(newAddButton, addButton);
  
    // Add price item functionality
    newAddButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Add price button clicked');
      
        const container = document.querySelector('.price-items-container');
        if (!container) {
            console.error('Price items container not found');
            return;
        }
      
        // Create new price item row
        const newRow = document.createElement('div');
        newRow.className = 'price-item-row grid grid-cols-4 gap-4 items-center p-3 border border-gray-200 rounded-lg bg-white hover:border-blue-300 transition-colors';
        newRow.innerHTML = `
            <input type="text" placeholder="e.g., 500ml, 100 tablets"
                   class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
            <input type="number" placeholder="0.00" step="0.01" min="0"
                   class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
            <input type="number" placeholder="0.00" step="0.01" min="0"
                   class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
            <button type="button" class="remove-price-btn flex justify-center">
                <i class="fas fa-times-circle text-red-500 text-lg hover:text-red-700 transition-colors"></i>
            </button>
        `;
      
        // Add fade-in animation
        newRow.style.opacity = '0';
        newRow.style.transform = 'translateY(-10px)';
      
        container.appendChild(newRow);
      
        // Trigger animation after DOM insertion
        setTimeout(() => {
            newRow.style.opacity = '1';
            newRow.style.transform = 'translateY(0)';
            newRow.style.transition = 'all 0.3s ease';
        }, 10);
      
        // Add event listener to the new remove button
        const removeBtn = newRow.querySelector('.remove-price-btn');
        setupRemoveButton(removeBtn);
      
        console.log('New price item added');
    });
  
    // Setup initial remove buttons
    setupPriceItemEventListeners();
  
    console.log('Price management setup complete');
}

function getPriceData() {
    const priceType = document.getElementById('edit-price-type').value;
  
    if (priceType === 'single') {
        console.log('Using single price type');
      
        const price = document.getElementById('edit-price').value;
        const oldPrice = document.getElementById('edit-old-price').value;
      
        const priceValue = price ? parseFloat(price) : 0;
        const oldPriceValue = oldPrice ? parseFloat(oldPrice) : null;
      
        return {
            prices: [priceValue],
            oldPrices: oldPriceValue !== null ? [oldPriceValue] : [],
            variants: []
        };
    } else {
        console.log('Using multiple price type');
      
        const priceItems = document.querySelectorAll('.price-item-row');
        console.log('Found price items:', priceItems.length);
      
        const prices = [];
        const oldPrices = [];
        const variants = [];
      
        priceItems.forEach((row, index) => {
            const inputs = row.querySelectorAll('input');
          
            if (inputs.length >= 3) {
                const variantInput = inputs[0];
                const priceInput = inputs[1];
                const oldPriceInput = inputs[2];
              
                const variant = variantInput.value.trim();
                const price = priceInput.value.trim();
                const oldPrice = oldPriceInput.value.trim();
              
                if (price && !isNaN(parseFloat(price))) {
                    const priceNum = parseFloat(price);
                    if (priceNum >= 0) {
                        prices.push(priceNum);
                        variants.push(variant || `Variant ${index + 1}`);
                      
                        if (oldPrice && !isNaN(parseFloat(oldPrice))) {
                            oldPrices.push(parseFloat(oldPrice));
                        } else {
                            oldPrices.push(null);
                        }
                    }
                }
            }
        });
      
        console.log('Collected data:', { prices, oldPrices, variants });
      
        // Fallback if no prices collected
        if (prices.length === 0) {
            console.log('No prices collected, falling back to single price');
            const fallbackPrice = document.getElementById('edit-price').value;
            const fallbackOldPrice = document.getElementById('edit-old-price').value;
          
            const priceValue = fallbackPrice ? parseFloat(fallbackPrice) : 0;
            const oldPriceValue = fallbackOldPrice ? parseFloat(fallbackOldPrice) : null;
          
            return {
                prices: [priceValue],
                oldPrices: oldPriceValue !== null ? [oldPriceValue] : [],
                variants: []
            };
        }
      
        return {
            prices: prices,
            oldPrices: oldPrices,
            variants: variants
        };
    }
}

function populatePriceData(priceList, mrp, oldPrice) {
    console.log('populatePriceData called with:', { priceList, mrp, oldPrice });
  
    // Initialize price management first
    setupPriceManagement();
  
    // Wait a moment for DOM to be ready
    setTimeout(() => {
        const priceListItems = document.querySelector('.price-items-container');
        console.log('Price items container found:', priceListItems);
      
        if (!priceListItems) {
            console.error('Price items container not found!');
            return;
        }
      
        // Clear existing items
        priceListItems.innerHTML = '';
        priceItemsCount = 0;
      
        if (priceList && Array.isArray(priceList) && priceList.length > 0) {
            console.log('Setting up multiple price type with', priceList.length, 'items');
          
            // Set to multiple price type
            const priceTypeSelect = document.getElementById('edit-price-type');
            if (priceTypeSelect) {
                priceTypeSelect.value = 'multiple';
                priceTypeSelect.dispatchEvent(new Event('change'));
            }
          
            // Add price items after the DOM has been updated
            setTimeout(() => {
                priceList.forEach(item => {
                    addPriceItemToContainer(item.variant || item.size || '', item.price, item.originalPrice);
                });
            }, 100);
          
            // Clear single price fields
            const priceInput = document.getElementById('edit-price');
            const oldPriceInput = document.getElementById('edit-old-price');
          
            if (priceInput) priceInput.value = '';
            if (oldPriceInput) oldPriceInput.value = '';
        } else {
            console.log('Setting up single price type');
          
            // Set to single price type
            const priceTypeSelect = document.getElementById('edit-price-type');
            if (priceTypeSelect) {
                priceTypeSelect.value = 'single';
                priceTypeSelect.dispatchEvent(new Event('change'));
            }
          
            // Set single price fields
            const priceInput = document.getElementById('edit-price');
            const oldPriceInput = document.getElementById('edit-old-price');
          
            if (priceInput) priceInput.value = mrp || '';
            if (oldPriceInput) oldPriceInput.value = oldPrice || '';
        }
    }, 100);
}

function addPriceItemToContainer(variant = '', price = '', originalPrice = '') {
    const container = document.querySelector('.price-items-container');
    if (!container) {
        console.error('Cannot find price items container');
        return;
    }
  
    console.log('Adding price item:', { variant, price, originalPrice });
  
    // Create new row
    const newRow = document.createElement('div');
    newRow.className = 'price-item-row grid grid-cols-4 gap-4 items-center p-3 border border-gray-200 rounded-lg bg-white hover:border-blue-300 transition-colors';
    newRow.innerHTML = `
        <input type="text" placeholder="e.g., 500ml, 100 tablets"
               value="${variant || ''}"
               class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
        <input type="number" placeholder="0.00" step="0.01" min="0"
               value="${price || ''}"
               class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
        <input type="number" placeholder="0.00" step="0.01" min="0"
               value="${originalPrice || ''}"
               class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
        <button type="button" class="remove-price-btn flex justify-center">
            <i class="fas fa-times-circle text-red-500 text-lg hover:text-red-700 transition-colors"></i>
        </button>
    `;
  
    // Add fade-in animation
    newRow.style.opacity = '0';
    newRow.style.transform = 'translateY(-10px)';
    container.appendChild(newRow);
  
    // Trigger animation
    setTimeout(() => {
        newRow.style.opacity = '1';
        newRow.style.transform = 'translateY(0)';
        newRow.style.transition = 'all 0.3s ease';
    }, 10);
  
    // Add event listener to remove button
    const removeBtn = newRow.querySelector('.remove-price-btn');
    if (removeBtn) {
        removeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const row = this.closest('.price-item-row');
            if (row) {
                row.style.opacity = '0';
                row.style.transform = 'translateX(-20px)';
                row.style.transition = 'all 0.3s ease';
              
                setTimeout(() => {
                    row.remove();
                    console.log('Price item removed');
                }, 300);
            }
        });
    }
  
    priceItemsCount++;
}

// ============================================
// SIDEBAR FUNCTIONS (unchanged)
// ============================================
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
  
    if (window.innerWidth < 768) {
        // Mobile: Just toggle visibility
        sidebar.classList.toggle('translate-x-0');
    } else {
        // Desktop: Toggle between collapsed and expanded
        sidebar.classList.toggle('collapsed');
      
        // Update arrow icon
        const sidebarArrow = document.getElementById('sidebar-arrow');
        if (sidebar.classList.contains('collapsed')) {
            sidebarArrow.classList.remove('fa-chevron-left');
            sidebarArrow.classList.add('fa-chevron-right');
        } else {
            sidebarArrow.classList.remove('fa-chevron-right');
            sidebarArrow.classList.add('fa-chevron-left');
        }
    }
}

function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarArrow = document.getElementById('sidebar-arrow');
  
    // Set initial state based on screen width
    if (window.innerWidth >= 768) {
        // Desktop: Start expanded
        sidebar.classList.remove('collapsed');
        sidebarArrow.classList.remove('fa-chevron-right');
        sidebarArrow.classList.add('fa-chevron-left');
    } else {
        // Mobile: Start hidden
        sidebar.classList.remove('translate-x-0');
    }
}

function handleResponsiveSidebar() {
    const sidebar = document.getElementById('sidebar');
  
    if (window.innerWidth >= 768) {
        // Desktop: Ensure sidebar is visible
        sidebar.classList.remove('translate-x-0');
      
        // Reset to expanded state on desktop if it was collapsed
        if (!sidebar.classList.contains('collapsed')) {
            sidebar.classList.remove('collapsed');
            const sidebarArrow = document.getElementById('sidebar-arrow');
            sidebarArrow.classList.remove('fa-chevron-right');
            sidebarArrow.classList.add('fa-chevron-left');
        }
    } else {
        // Mobile: Ensure sidebar is hidden by default
        sidebar.classList.remove('translate-x-0');
    }
}

// ============================================
// PRODUCT AND VERIFICATION SERVICES (DUMMY VERSIONS)
// ============================================
// Dummy Product Service Class
class ProductService {
    async getProductById(productId) {
        try {
            console.log(`Fetching product by ID: ${productId}`);
          
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 100));
          
            const product = DUMMY_PRODUCTS.find(p => p.productId == productId);
          
            if (!product) {
                throw new Error(`Product with ID ${productId} not found`);
            }
          
            console.log('Product fetched:', product);
          
            // Add missing fields with defaults
            return {
                ...product,
                unit: product.unit || 'Tablet Strip',
                rating: product.rating || 0,
                sku: product.sku || `SKU-${product.productId}`,
                verificationStatus: product.approved === true ? 'APPROVED' :
                                  product.approved === false ? 'REJECTED' : 'PENDING'
            };
        } catch (error) {
            console.error('Error fetching product by ID:', error);
            throw error;
        }
    }
  
    async getAllProducts(page = 0, size = 1000) {
        try {
            console.log(`Fetching products from dummy data`);
          
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 300));
          
            // Process each product to add missing fields
            const processedProducts = DUMMY_PRODUCTS.map(product => {
                return {
                    ...product,
                    // Add missing fields with default values
                    unit: product.unit || 'Tablet Strip',
                    rating: product.rating || 0,
                    sku: product.sku || `SKU-${product.productId}`,
                    // Map approved field to verificationStatus
                    verificationStatus: product.approved === true ? 'APPROVED' :
                                      product.approved === false ? 'REJECTED' : 'PENDING'
                };
            });
          
            console.log(`Found ${processedProducts.length} products in dummy data`);
            console.log('First processed product:', processedProducts[0]);
            return processedProducts;
        } catch (error) {
            console.error('Error fetching products:', error);
            console.error('Error details:', {
                message: error.message,
                stack: error.stack
            });
            return [];
        }
    }
  
    async createProduct(productData, mainImage, subImages = []) {
        try {
            console.log('Creating new product with dummy data');
          
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 500));
          
            // Generate a new product ID
            const maxId = DUMMY_PRODUCTS.reduce((max, p) => Math.max(max, p.productId || 0), 0);
            const newProductId = maxId + 1;
          
            // Create new product object
            const newProduct = {
                productId: newProductId,
                sku: productData.sku || `SKU-${newProductId}`,
                productName: productData.name || 'New Product',
                productCategory: productData.category || 'Other',
                productSubCategory: productData.type || 'Other',
                brandName: productData.brand || 'Generic',
                productQuantity: productData.quantity || 0,
                unit: 'Tablet Strip',
                productPrice: productData.prices || [0],
                productOldPrice: productData.oldPrices || [],
                productStatus: productData.status || 'Available',
                prescriptionRequired: productData.prescription === 'Yes',
                productDescription: productData.description || '',
                mfgDate: productData.mfgDate || new Date().toISOString().split('T')[0],
                expDate: productData.expiry || new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
                batchNo: productData.batch || `BATCH-${newProductId}`,
                rating: productData.rating || 0,
                benefitsList: productData.benefits || [],
                ingredientsList: productData.ingredients || [],
                directionsList: productData.directions || [],
                productSizes: productData.sizes || [],
                productMainImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=150&h=150&fit=crop&crop=center',
                productSubImages: [],
                approved: null, // New products are pending verification
                createdAt: new Date().toISOString(),
                productDynamicFields: {
                    strength: productData.strength || '',
                    form: productData.form || '',
                    dosage: productData.dosage || ''
                }
            };
          
            // Add to dummy data
            DUMMY_PRODUCTS.push(newProduct);
          
            // ───────────────────────────────────────────────────────
            // NEW: Save to localStorage so product persists on refresh
            saveProductsToStorage();
            // ───────────────────────────────────────────────────────
          
            console.log('Product created successfully:', newProduct);
            return newProduct;
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    }
  
    async updateProduct(productId, productData, mainImage = null, subImages = []) {
        try {
            console.log(`Updating product ${productId} with dummy data`);
          
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 500));
          
            // Find product index
            const productIndex = DUMMY_PRODUCTS.findIndex(p => p.productId == productId);
          
            if (productIndex === -1) {
                throw new Error(`Product with ID ${productId} not found`);
            }
          
            // Update the product
            const updatedProduct = {
                ...DUMMY_PRODUCTS[productIndex],
                sku: productData.sku || DUMMY_PRODUCTS[productIndex].sku,
                productName: productData.name || DUMMY_PRODUCTS[productIndex].productName,
                productCategory: productData.category || DUMMY_PRODUCTS[productIndex].productCategory,
                productSubCategory: productData.type || DUMMY_PRODUCTS[productIndex].productSubCategory,
                brandName: productData.brand || DUMMY_PRODUCTS[productIndex].brandName,
                productQuantity: productData.quantity || DUMMY_PRODUCTS[productIndex].productQuantity,
                productPrice: productData.prices || DUMMY_PRODUCTS[productIndex].productPrice,
                productOldPrice: productData.oldPrices || DUMMY_PRODUCTS[productIndex].productOldPrice,
                productStatus: productData.status || DUMMY_PRODUCTS[productIndex].productStatus,
                prescriptionRequired: productData.prescription === 'Yes',
                productDescription: productData.description || DUMMY_PRODUCTS[productIndex].productDescription,
                mfgDate: productData.mfgDate || DUMMY_PRODUCTS[productIndex].mfgDate,
                expDate: productData.expiry || DUMMY_PRODUCTS[productIndex].expDate,
                batchNo: productData.batch || DUMMY_PRODUCTS[productIndex].batchNo,
                rating: productData.rating || DUMMY_PRODUCTS[productIndex].rating,
                benefitsList: productData.benefits || DUMMY_PRODUCTS[productIndex].benefitsList,
                ingredientsList: productData.ingredients || DUMMY_PRODUCTS[productIndex].ingredientsList,
                directionsList: productData.directions || DUMMY_PRODUCTS[productIndex].directionsList,
                productSizes: productData.sizes || DUMMY_PRODUCTS[productIndex].productSizes,
                // Update images if provided
                productMainImage: mainImage ? 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=150&h=150&fit=crop&crop=center' : DUMMY_PRODUCTS[productIndex].productMainImage
            };
          
            // Update in dummy data
            DUMMY_PRODUCTS[productIndex] = updatedProduct;

            // ───────────────────────────────────────────────────────
            // NEW: Save to localStorage after update
            saveProductsToStorage();
            // ───────────────────────────────────────────────────────
          
            console.log('Product updated successfully:', updatedProduct);
            return updatedProduct;
        } catch (error) {
            console.error('Error in updateProduct:', error);
            throw error;
        }
    }
}

class VerificationService {
    async verifyProduct(productId, action) {
        try {
            console.log(`=== VERIFICATION REQUEST ===`);
            console.log(`Action: ${action} for product ID: ${productId}`);
          
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 300));
          
            // Find product index
            const productIndex = DUMMY_PRODUCTS.findIndex(p => p.productId == productId);
          
            if (productIndex === -1) {
                throw new Error(`Product with ID ${productId} not found`);
            }
          
            // Update verification status
            DUMMY_PRODUCTS[productIndex].approved = action === 'APPROVE';
          
            // ───────────────────────────────────────────────────────
            // NEW: Save after verification status change
            saveProductsToStorage();
            // ───────────────────────────────────────────────────────

            const result = {
                success: true,
                message: `Product ${action === 'APPROVE' ? 'approved' : 'rejected'} successfully`,
                productId: productId
            };
          
            console.log('Success Response:', result);
            return result;
          
        } catch (error) {
            console.error('Verification error details:', error);
            throw error;
        }
    }
}

// Initialize services
const productService = new ProductService();
const verificationService = new VerificationService();

// ============================================
// UTILITY FUNCTIONS (unchanged)
// ============================================
function getStockStatus(quantity) {
    if (quantity === 0 || quantity === null || quantity === undefined) return 'Out of Stock';
    if (quantity < 10) return 'Low Stock';
    return 'In Stock';
}

function getStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
  
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-yellow-400"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="fas fa-star text-gray-300"></i>';
    }
    return stars;
}

// Helper function to format date (ensure this exists in your code)
function formatDate(dateString) {
    if (!dateString) return 'N/A';
  
    if (dateString.includes('T')) {
        dateString = dateString.split('T')[0];
    }
  
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'N/A';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

console.log('✅ Barcode generation functions fixed and loaded!');

function formatDateTime(dateString) {
    if (!dateString) return 'N/A';
  
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'N/A';
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${day}-${month}-${year} ${hours}:${minutes}`;
}

function isExpiringSoon(expiryDate) {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffTime > 0 && diffDays <= 30;
}

function getRowClass(product) {
    const stockStatus = getStockStatus(product.productQuantity);
    const expiring = isExpiringSoon(product.expDate);
  
    // Map approved to verification status for row highlighting
    const verificationStatus = product.approved === true ? 'APPROVED' :
                              product.approved === false ? 'REJECTED' : 'PENDING';
  
    if (verificationStatus === 'PENDING') return 'verification-pending-row';
    if (verificationStatus === 'REJECTED') return 'verification-rejected-row';
    if (stockStatus === 'Low Stock') return 'status-low-stock-row';
    if (expiring) return 'status-expiring-row';
    if (stockStatus === 'In Stock' || product.productStock === 'In-Stock') return 'status-in-stock-row';
    return '';
}

// ============================================
// CATEGORY MANAGEMENT FUNCTIONS (unchanged)
// ============================================
async function initializeCategories() {
    // Start with static categories
    allCategories = Object.keys(categoryStructure);
  
    // Extract all subcategories
    allSubcategories = [];
    Object.values(categoryStructure).forEach(subs => {
        subs.forEach(sub => {
            if (!allSubcategories.includes(sub)) {
                allSubcategories.push(sub);
            }
        });
    });
  
    // Try to fetch categories from dummy data
    try {
        const products = await productService.getAllProducts(0, 1000);
      
        // Extract unique categories from products
        const productCategories = [...new Set(products
            .map(p => p.productCategory)
            .filter(cat => cat && cat.trim() !== '')
        )];
      
        // Merge categories
        productCategories.forEach(cat => {
            if (!allCategories.includes(cat)) {
                allCategories.push(cat);
            }
        });
      
        // Extract unique subcategories from products
        const productSubcategories = [...new Set(products
            .map(p => p.productSubCategory)
            .filter(sub => sub && sub.trim() !== '')
        )];
      
        // Merge subcategories
        productSubcategories.forEach(sub => {
            if (!allSubcategories.includes(sub)) {
                allSubcategories.push(sub);
            }
        });
      
    } catch (error) {
        console.error('Error loading categories from dummy data:', error);
    }
  
    // Sort alphabetically
    allCategories.sort();
    allSubcategories.sort();
  
    // Populate dropdowns
    populateCategoryDropdowns();
}

function populateCategoryDropdowns() {
    const categoryFilter = document.getElementById('categoryFilter');
    const editCategory = document.getElementById('edit-category');
  
    // Clear existing options
    categoryFilter.innerHTML = '<option value="">All Categories</option>';
    editCategory.innerHTML = '<option value="">Select Category</option>';
  
    // Add categories
    allCategories.forEach(category => {
        const option1 = document.createElement('option');
        option1.value = category;
        option1.textContent = category;
        categoryFilter.appendChild(option1);
      
        const option2 = document.createElement('option');
        option2.value = category;
        option2.textContent = category;
        editCategory.appendChild(option2);
    });
  
    // Add "Other" option
    const otherOption = document.createElement('option');
    otherOption.value = 'Other';
    otherOption.textContent = 'Other (Specify)';
    categoryFilter.appendChild(otherOption.cloneNode(true));
    editCategory.appendChild(otherOption);
}

function populateSubcategoryDropdown(category = null) {
    const subcategoryFilter = document.getElementById('subcategoryFilter');
    const editType = document.getElementById('edit-type');
  
    // Clear existing options
    subcategoryFilter.innerHTML = '<option value="">All Subcategories</option>';
    editType.innerHTML = '<option value="">Select Subcategory</option>';
  
    let subcategories = [];
  
    if (category && category !== 'Other') {
        // Get subcategories for selected category
        if (categoryStructure[category]) {
            subcategories = categoryStructure[category];
        } else {
            // For custom categories, show all subcategories
            subcategories = allSubcategories;
        }
    } else {
        // Show all subcategories
        subcategories = allSubcategories;
    }
  
    // Add subcategories
    subcategories.forEach(sub => {
        const option1 = document.createElement('option');
        option1.value = sub;
        option1.textContent = sub;
        subcategoryFilter.appendChild(option1);
      
        const option2 = document.createElement('option');
        option2.value = sub;
        option2.textContent = sub;
        editType.appendChild(option2);
    });
  
    // Add "Other" option
    const otherOption = document.createElement('option');
    otherOption.value = 'Other';
    otherOption.textContent = 'Other (Specify)';
    subcategoryFilter.appendChild(otherOption.cloneNode(true));
    editType.appendChild(otherOption);
  
    // Enable dropdowns
    subcategoryFilter.disabled = false;
    editType.disabled = false;
}

// ============================================
// FORM HANDLING FUNCTIONS (unchanged)
// ============================================
function openEditModal(product = null) {
    console.log('Opening edit modal...');
  
    const editProductModal = document.getElementById('editProductModal');
    const modalTitle = document.getElementById('editModalTitle');
  
    // Check if modal exists
    if (!editProductModal) {
        console.error('Edit modal not found in DOM!');
        showSuccessPopup('Error: Edit form not available', 'error');
        return;
    }
  
    if (product && product.productId) {
        // EDIT MODE
        modalTitle.textContent = 'Edit Product';
        currentProductId = product.productId;
      
        console.log('Loading product data for editing:', product.productName);
        console.log('Product ID:', product.productId);
      
        // RESET FORM FIRST
        resetEditForm();
      
        // Wait a moment for reset to complete, then populate data
        setTimeout(() => {
            // Fill form with product data using safe element checking
            const fields = [
                { id: 'edit-sku', value: product.sku || '' },
                { id: 'edit-name', value: product.productName || '' },
                { id: 'edit-brand', value: product.brandName || '' },
                { id: 'edit-prescription', value: product.prescriptionRequired ? 'Yes' : 'No' },
                { id: 'edit-status', value: product.productStatus || 'Available' },
                { id: 'edit-quantity', value: product.productQuantity || 0 },
                { id: 'edit-rating', value: product.rating || 0 },
                { id: 'edit-batch', value: product.batchNo || '' },
                { id: 'edit-mfg-date', value: product.mfgDate ? product.mfgDate.split('T')[0] : '' },
                { id: 'edit-expiry', value: product.expDate ? product.expDate.split('T')[0] : '' },
                { id: 'edit-description', value: product.productDescription || '' },
                { id: 'edit-benefits', value: (product.benefitsList || []).join('\n') },
                { id: 'edit-ingredients', value: (product.ingredientsList || []).join(', ') }
            ];
          
            // Safely set values only if elements exist
            fields.forEach(field => {
                const element = document.getElementById(field.id);
                if (element) {
                    element.value = field.value;
                    console.log(`Set ${field.id}: ${field.value}`);
                } else {
                    console.warn(`Element not found: ${field.id}`);
                }
            });
          
            // Check and set directions field if it exists
            const directionsElement = document.getElementById('edit-directions');
            if (directionsElement) {
                directionsElement.value = (product.directionsList || []).join('\n');
                console.log(`Set edit-directions`);
            }
          
            // Handle dynamic fields safely
            if (product.productDynamicFields) {
                const dynamicFields = [
                    { id: 'edit-strength', value: product.productDynamicFields.strength || '' },
                    { id: 'edit-form', value: product.productDynamicFields.form || '' },
                    { id: 'edit-dosage', value: product.productDynamicFields.dosage || '' }
                ];
              
                dynamicFields.forEach(field => {
                    const element = document.getElementById(field.id);
                    if (element) {
                        element.value = field.value;
                        console.log(`Set ${field.id}: ${field.value}`);
                    }
                });
            }
          
            // Handle pricing data
            const sizes = product.productSizes || [];
            const prices = product.productPrice || [];
            const oldPrices = product.productOldPrice || [];
          
            console.log('Pricing data:', { sizes, prices, oldPrices });
          
            // IMPORTANT: Check if we have multiple prices vs single price
            if (prices && Array.isArray(prices) && prices.length > 1) {
                console.log('Setting up multiple price type with', prices.length, 'variants');
              
                const priceList = sizes.map((size, index) => ({
                    variant: size,
                    price: prices[index] || 0,
                    originalPrice: oldPrices[index] || 0
                }));
              
                const mrp = prices.length > 0 ? prices[0] : '';
                const oldPrice = oldPrices.length > 0 ? oldPrices[0] : '';
              
                // Use setTimeout to ensure modal is fully rendered
                setTimeout(() => {
                    populatePriceData(priceList, mrp, oldPrice);
                }, 200);
              
            } else {
                console.log('Setting up single price type');
                // Set single price fields safely
                const priceElement = document.getElementById('edit-price');
                const mrpElement = document.getElementById('edit-mrp');
                const oldPriceElement = document.getElementById('edit-old-price');
              
                if (priceElement) {
                    priceElement.value = prices && prices.length > 0 ? prices[0] : '';
                    console.log(`Set edit-price: ${priceElement.value}`);
                }
                if (mrpElement) {
                    mrpElement.value = prices && prices.length > 0 ? prices[0] : '';
                    console.log(`Set edit-mrp: ${mrpElement.value}`);
                }
                if (oldPriceElement) {
                    oldPriceElement.value = oldPrices && oldPrices.length > 0 ? oldPrices[0] : '';
                    console.log(`Set edit-old-price: ${oldPriceElement.value}`);
                }
              
                // Ensure price type is set to single
                const priceTypeSelect = document.getElementById('edit-price-type');
                if (priceTypeSelect) {
                    priceTypeSelect.value = 'single';
                    // Trigger change event to show single price section
                    setTimeout(() => {
                        priceTypeSelect.dispatchEvent(new Event('change'));
                    }, 100);
                }
            }
          
            // Handle sizes safely
            const sizesElement = document.getElementById('edit-sizes');
            if (sizesElement) {
                sizesElement.value = sizes.join(', ');
                console.log(`Set edit-sizes: ${sizesElement.value}`);
            }
          
            // Handle category selection safely
            const categorySelect = document.getElementById('edit-category');
            const categoryOtherContainer = document.getElementById('category-other-container');
            const categoryOtherInput = document.getElementById('edit-category-other');
          
            if (categorySelect && categoryOtherContainer && categoryOtherInput) {
                if (product.productCategory && allCategories.includes(product.productCategory)) {
                    categorySelect.value = product.productCategory;
                    categoryOtherContainer.classList.add('hidden');
                    categoryOtherInput.value = '';
                    categoryOtherInput.required = false;
                    console.log(`Set edit-category: ${product.productCategory}`);
                } else if (product.productCategory) {
                    categorySelect.value = 'Other';
                    categoryOtherContainer.classList.remove('hidden');
                    categoryOtherInput.value = product.productCategory;
                    categoryOtherInput.required = true;
                    console.log(`Set edit-category to Other: ${product.productCategory}`);
                }
              
                // Enable subcategory dropdown and populate
                populateSubcategoryDropdown(categorySelect.value);
            } else {
                console.warn('Category elements not found');
            }
          
            // Handle subcategory selection safely
            const typeSelect = document.getElementById('edit-type');
            const typeOtherContainer = document.getElementById('type-other-container');
            const typeOtherInput = document.getElementById('edit-type-other');
  
            if (typeSelect && typeOtherContainer && typeOtherInput) {
                if (product.productSubCategory && allSubcategories.includes(product.productSubCategory)) {
                    typeSelect.value = product.productSubCategory;
                    typeOtherContainer.classList.add('hidden');
                    typeOtherInput.value = '';
                    typeOtherInput.required = false;
                    console.log(`Set edit-type: ${product.productSubCategory}`);
                } else if (product.productSubCategory) {
                    typeSelect.value = 'Other';
                    typeOtherContainer.classList.remove('hidden');
                    typeOtherInput.value = product.productSubCategory;
                    typeOtherInput.required = true;
                    console.log(`Set edit-type to Other: ${product.productSubCategory}`);
                }
            } else {
                console.warn('Type elements not found');
            }
          
            // Show verification status for existing products safely
            const verificationStatusContainer = document.getElementById('verification-status-container');
            const verificationStatusSelect = document.getElementById('edit-verification-status');
  
            if (verificationStatusContainer && verificationStatusSelect) {
                verificationStatusContainer.classList.remove('hidden');
                verificationStatusSelect.value = product.verificationStatus || 'PENDING';
                console.log(`Set verification status: ${verificationStatusSelect.value}`);
            }
          
            // Update the file input placeholder if main image exists
            const mainImageInput = document.getElementById('edit-main-image');
            if (mainImageInput && product.productMainImage) {
                mainImageInput.placeholder = 'Current image exists. Upload new to replace.';
            }
          
        }, 100); // Wait for reset to complete
      
    } else {
        // ADD NEW PRODUCT MODE
        modalTitle.textContent = 'Add New Product';
        currentProductId = null;
      
        // Reset form for new product
        resetEditForm();
      
        // Hide verification status for new products
        const verificationContainer = document.getElementById('verification-status-container');
        if (verificationContainer) {
            verificationContainer.classList.add('hidden');
        }
    }
  
    // Show the modal
    editProductModal.style.display = 'flex';
  
    // Setup price management AFTER modal is visible
    setTimeout(() => {
        setupPriceManagement();
    }, 300);
}

// Helper function to safely reset the form
function resetEditForm() {
    console.log('Resetting edit form...');
  
    const editForm = document.getElementById('editProductForm');
    if (editForm) {
        editForm.reset();
        console.log('Form reset complete');
    }
  
    // Reset category dropdowns
    const editCategory = document.getElementById('edit-category');
    const editType = document.getElementById('edit-type');
  
    if (editCategory) editCategory.value = '';
    if (editType) {
        editType.value = '';
        editType.disabled = true;
    }
  
    // Reset other containers
    const categoryOtherContainer = document.getElementById('category-other-container');
    const typeOtherContainer = document.getElementById('type-other-container');
  
    if (categoryOtherContainer) {
        categoryOtherContainer.classList.add('hidden');
        const categoryOtherInput = document.getElementById('edit-category-other');
        if (categoryOtherInput) {
            categoryOtherInput.value = '';
            categoryOtherInput.required = false;
        }
    }
  
    if (typeOtherContainer) {
        typeOtherContainer.classList.add('hidden');
        const typeOtherInput = document.getElementById('edit-type-other');
        if (typeOtherInput) {
            typeOtherInput.value = '';
            typeOtherInput.required = false;
        }
    }
  
    // Reset price type to single
    const priceTypeSelect = document.getElementById('edit-price-type');
    if (priceTypeSelect) {
        priceTypeSelect.value = 'single';
        // Trigger the change event to update UI
        setTimeout(() => {
            priceTypeSelect.dispatchEvent(new Event('change'));
        }, 50);
    }
  
    // Clear single price fields
    const priceFields = ['edit-price', 'edit-mrp', 'edit-old-price'];
    priceFields.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = '';
    });
  
    // Clear dynamic fields
    const dynamicFields = ['edit-strength', 'edit-form', 'edit-dosage', 'edit-directions', 'edit-sizes'];
    dynamicFields.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = '';
    });
  
    // Clear image inputs
    const imageInputs = ['edit-main-image', 'edit-image1', 'edit-image2', 'edit-image3', 'edit-image4'];
    imageInputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.value = '';
            input.placeholder = '';
        }
    });
  
    // Clear price items container
    const priceItemsContainer = document.querySelector('.price-items-container');
    if (priceItemsContainer) {
        // Keep only the first row (template row)
        const rows = priceItemsContainer.querySelectorAll('.price-item-row');
        rows.forEach((row, index) => {
            if (index > 0) {
                row.remove();
            }
        });
      
        // Clear inputs in the first row
        const firstRow = priceItemsContainer.querySelector('.price-item-row');
        if (firstRow) {
            const inputs = firstRow.querySelectorAll('input');
            inputs.forEach(input => {
                input.value = '';
            });
        }
    }
  
    // Reset verification status if it exists
    const verificationStatusSelect = document.getElementById('edit-verification-status');
    if (verificationStatusSelect) {
        verificationStatusSelect.value = 'PENDING';
    }
  
    // Hide verification container
    const verificationContainer = document.getElementById('verification-status-container');
    if (verificationContainer) {
        verificationContainer.classList.add('hidden');
    }
  
    console.log('Form reset completed successfully');
}

// ============================================
// PAGINATION FUNCTIONS (unchanged)
// ============================================
function setupPaginationControls() {
    const paginationControls = document.createElement('div');
    paginationControls.className = 'flex flex-col sm:flex-row justify-between items-center mt-6 pt-6 border-t border-gray-200';
    paginationControls.innerHTML = `
        <div class="flex items-center mb-4 sm:mb-0">
            <span class="text-sm text-gray-700 mr-3">Show:</span>
            <select id="pageSizeSelect" class="border rounded-lg py-1 px-3 bg-white border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition">
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
            </select>
            <span class="text-sm text-gray-700 ml-3">entries</span>
        </div>
      
        <div class="flex items-center">
            <span id="paginationInfo" class="text-sm text-gray-700 mr-4"></span>
          
            <nav class="flex space-x-1">
                <button id="firstPageBtn" class="pagination-btn pagination-nav" title="First Page">
                    <i class="fas fa-angle-double-left"></i>
                </button>
                <button id="prevPageBtn" class="pagination-btn pagination-nav" title="Previous Page">
                    <i class="fas fa-chevron-left"></i>
                </button>
              
                <div id="pageNumbers" class="flex space-x-1"></div>
              
                <button id="nextPageBtn" class="pagination-btn pagination-nav" title="Next Page">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <button id="lastPageBtn" class="pagination-btn pagination-nav" title="Last Page">
                    <i class="fas fa-angle-double-right"></i>
                </button>
            </nav>
        </div>
    `;
  
    // Find the product table container and add pagination controls after it
    const productTableContainer = document.querySelector('.product-table-container');
    productTableContainer.parentNode.insertBefore(paginationControls, productTableContainer.nextSibling);
  
    // Add event listeners for pagination controls
    document.getElementById('pageSizeSelect').addEventListener('change', function() {
        pageSize = parseInt(this.value);
        currentPage = 1; // Reset to first page when page size changes
        renderTable();
    });
  
    document.getElementById('firstPageBtn').addEventListener('click', () => {
        currentPage = 1;
        renderTable();
    });
  
    document.getElementById('prevPageBtn').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    });
  
    document.getElementById('nextPageBtn').addEventListener('click', () => {
        const totalPages = Math.ceil(filteredProducts.length / pageSize);
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    });
  
    document.getElementById('lastPageBtn').addEventListener('click', () => {
        const totalPages = Math.ceil(filteredProducts.length / pageSize);
        currentPage = totalPages;
        renderTable();
    });
  
    // Add CSS for pagination
    const style = document.createElement('style');
    style.textContent = `
        .pagination-btn {
            min-width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            background-color: white;
            color: #374151;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.2s;
        }
      
        .pagination-btn:hover:not(:disabled) {
            background-color: #f3f4f6;
            border-color: #9ca3af;
        }
      
        .pagination-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
      
        .pagination-nav {
            padding: 0 8px;
        }
      
        .pagination-nav i {
            font-size: 12px;
        }
      
        .page-number-btn {
            min-width: 32px;
            padding: 0 8px;
        }
      
        .page-number-btn.active {
            background-color: #3b82f6;
            color: white;
            border-color: #3b82f6;
        }
      
        .page-number-btn.active:hover {
            background-color: #2563eb;
        }
    `;
    document.head.appendChild(style);
}

function updatePaginationControls() {
    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / pageSize);
  
    // Update pagination info
    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(currentPage * pageSize, totalProducts);
    document.getElementById('paginationInfo').textContent =
        `Showing ${startIndex} to ${endIndex} of ${totalProducts} entries`;
  
    // Update page numbers
    const pageNumbersContainer = document.getElementById('pageNumbers');
    pageNumbersContainer.innerHTML = '';
  
    // Show max 5 page numbers
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
  
    // Adjust if we're near the beginning
    if (currentPage <= 3) {
        endPage = Math.min(5, totalPages);
    }
  
    // Adjust if we're near the end
    if (currentPage >= totalPages - 2) {
        startPage = Math.max(1, totalPages - 4);
    }
  
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `pagination-btn page-number-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderTable();
        });
        pageNumbersContainer.appendChild(pageBtn);
    }
  
    // Update navigation buttons state
    document.getElementById('firstPageBtn').disabled = currentPage === 1;
    document.getElementById('prevPageBtn').disabled = currentPage === 1;
    document.getElementById('nextPageBtn').disabled = currentPage === totalPages || totalPages === 0;
    document.getElementById('lastPageBtn').disabled = currentPage === totalPages || totalPages === 0;
}

// ============================================
// TABLE RENDERING FUNCTIONS (unchanged)
// ============================================
function renderTable() {
    const tableBody = document.querySelector('#productTable tbody');
    tableBody.innerHTML = '';
  
    if (!filteredProducts || filteredProducts.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="15" class="text-center py-8 text-gray-500">No products found</td>';
        tableBody.appendChild(row);
        updatePaginationControls();
        return;
    }
  
    // Calculate pagination slice
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredProducts.length);
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
  
    // Create table rows
    productsToShow.forEach((product, index) => {
        console.log(`Processing product ${startIndex + index + 1}:`, product.productName);
      
        // Handle pricing display
        let pricingDisplay = 'N/A';
        let pricingDetails = '';
        if (product.productPrice && Array.isArray(product.productPrice) && product.productPrice.length > 0) {
            pricingDisplay = `₹${Number(product.productPrice[0]).toFixed(2)}`;
            if (product.productPrice.length > 1) {
                pricingDetails = `(+${product.productPrice.length - 1} more)`;
            }
        }
      
        // Show sizes count
        const sizesCount = product.productSizes ? product.productSizes.length : 0;
      
        // Use actual image URLs from dummy data
        const mainImageUrl = product.productMainImage || 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=150&h=150&fit=crop&crop=center';
      
        // Determine verification status from approved field
        const verificationStatus = product.approved === true ? 'APPROVED' :
                                 product.approved === false ? 'REJECTED' : 'PENDING';
      
        // Create table row
        const row = document.createElement('tr');
        row.className = getRowClass(product);
      
        // Create row HTML with checkbox
        row.innerHTML = `
            <td class="text-center">
                <input type="checkbox" class="product-checkbox" data-id="${product.productId}">
            </td>
            <td class="text-center">${product.productId || `N/A-${startIndex + index}`}</td>
            <td class="text-center">
                <img src="${mainImageUrl}" alt="${product.productName}" class="product-thumbnail w-10 h-10 object-cover rounded" onerror="this.src='https://via.placeholder.com/40?text=No+Image'">
            </td>
            <td>${product.sku || `SKU-${product.productId}`}</td>
            <td>${product.productName || `Product ${startIndex + index}`}</td>
            <td>${product.productCategory || 'N/A'}</td>
            <td>${product.productSubCategory || 'N/A'}</td>
            <td>${product.brandName || 'N/A'}</td>
            <td>
                <span class="${getStockStatus(product.productQuantity) === 'Low Stock' ? 'low-stock' : getStockStatus(product.productQuantity) === 'Out of Stock' ? 'status-out-of-stock' : ''}">
                    ${product.productQuantity || 0} ${product.unit || 'unit'}
                </span>
            </td>
            <td>
                <div class="font-semibold">${pricingDisplay}</div>
                ${product.productOldPrice && product.productOldPrice.length > 0 ?
                    `<div class="old-price">${sizesCount} variant${sizesCount > 1 ? 's' : ''}</div>` : ''}
                ${pricingDetails ? `<div class="text-xs text-gray-500">${pricingDetails}</div>` : ''}
            </td>
            <td class="text-center">
                <div class="flex items-center justify-center">
                    <span class="rating-stars mr-1">${getStarRating(product.rating || 0)}</span>
                    <span>${(product.rating || 0).toFixed(1)}</span>
                </div>
            </td>
            <td class="text-center">
                <span class="${isExpiringSoon(product.expDate) ? 'expiring-soon' : ''}">${formatDate(product.expDate)}</span>
            </td>
            <td class="text-center">
                <span class="status-badge ${product.productStatus === 'Available' ? 'status-available' : product.productStatus === 'Unavailable' ? 'status-unavailable' : 'status-discontinued'}">
                    ${product.productStatus || 'N/A'}
                </span>
            </td>
            <td class="text-center">
                <span class="verification-badge status-badge ${verificationStatus === 'APPROVED' ? 'status-approved' : verificationStatus === 'REJECTED' ? 'status-rejected' : 'status-pending'}">
                    ${verificationStatus}
                </span>
            </td>
            <td class="text-center">
                <div class="action-buttons">
                    <button class="view-btn" data-id="${product.productId}" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="edit-btn" data-id="${product.productId}" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-btn" data-id="${product.productId}" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                    <!-- Add Barcode/QR Button -->
                    <button class="barcode-action-btn" data-id="${product.productId}" title="Generate Barcode/QR">
                        <i class="fas fa-barcode"></i>
                    </button>
                    <!-- APPROVAL STATUS BASED ACTION BUTTONS -->
                    ${verificationStatus === 'PENDING' ?
                        `<button class="verify-btn" data-id="${product.productId}" title="Approve">
                            <i class="fas fa-check-circle text-green-500"></i>
                        </button>
                        <button class="reject-btn" data-id="${product.productId}" title="Reject">
                            <i class="fas fa-times-circle text-red-500"></i>
                        </button>` :
                    verificationStatus === 'APPROVED' ?
                        `<button class="unapprove-btn" data-id="${product.productId}" title="Reject (Unapprove)">
                            <i class="fas fa-times-circle text-red-500"></i>
                        </button>` :
                    verificationStatus === 'REJECTED' ?
                        `<button class="reapprove-btn" data-id="${product.productId}" title="Re-approve">
                            <i class="fas fa-check-circle text-green-500"></i>
                        </button>` : ''}
                </div>
            </td>
        `;
      
        tableBody.appendChild(row);
    });
  
    // Attach event listeners to the new buttons
    attachTableEventListeners();
  
    // Update pagination controls
    updatePaginationControls();
}

// ============================================
// DATA LOADING AND FILTER FUNCTIONS (unchanged)
// ============================================
async function loadProducts(productsFromAPI = null) {
    try {
        console.log('loadProducts called');
      
        let productsData;
      
        if (productsFromAPI) {
            productsData = productsFromAPI;
            console.log('Using provided products:', productsData.length);
        } else {
            console.log('Fetching products from dummy data...');
            productsData = await productService.getAllProducts(0, 1000);
            console.log('Products fetched:', productsData);
            console.log('Number of products:', productsData.length);
        }
        // Store ALL products
        allProducts = productsData;
      
        // Apply current filters and search to all products
        applyAllFilters();
      
        console.log('Table populated with', filteredProducts.length, 'products');
      
    } catch (error) {
        console.error('Error loading products:', error);
        console.error('Error stack:', error.stack);
        showSuccessPopup('Error loading products. Please check console for details.', 'error');
      
        // Show error in table
        const tableBody = document.querySelector('#productTable tbody');
        tableBody.innerHTML = '<tr><td colspan="15" class="text-center py-8 text-red-500">Error loading products. Please try again.</td></tr>';
      
        // Reset filtered products
        filteredProducts = [];
        allProducts = [];
        updatePaginationControls();
    }
}

// Main filter function that combines all filters
function applyAllFilters() {
    console.log('applyAllFilters called');
  
    if (!allProducts || allProducts.length === 0) {
        filteredProducts = [];
        renderTable();
        return;
    }
  
    // Start with all products
    let filtered = [...allProducts];
  
    // Get current filter values
    const category = document.getElementById('categoryFilter').value;
    const subcategory = document.getElementById('subcategoryFilter').value;
    const prescription = document.getElementById('prescriptionFilter').value;
    const stock = document.getElementById('stockFilter').value;
    const verification = document.getElementById('verificationFilter').value;
  
    console.log('Current filters:', { category, subcategory, prescription, stock, verification, searchTerm });
  
    // Apply category filter
    if (category) {
        filtered = filtered.filter(p => p.productCategory === category);
        console.log(`After category filter (${category}):`, filtered.length);
    }
  
    // Apply subcategory filter
    if (subcategory) {
        filtered = filtered.filter(p => p.productSubCategory === subcategory);
        console.log(`After subcategory filter (${subcategory}):`, filtered.length);
    }
  
    // Apply prescription filter
    if (prescription) {
        if (prescription === 'Yes') {
            filtered = filtered.filter(p => {
                // Handle boolean, string, or number values
                const val = p.prescriptionRequired;
                return val === true || val === 'true' || val === 'Yes' || val === 'yes' || val === 1 || val === '1';
            });
        } else if (prescription === 'No') {
            filtered = filtered.filter(p => {
                // Handle boolean, string, or number values
                const val = p.prescriptionRequired;
                return val === false || val === 'false' || val === 'No' || val === 'no' || val === 0 || val === '0' ||
                       val === null || val === undefined || val === '';
            });
        }
        console.log(`After prescription filter (${prescription}):`, filtered.length);
    }
  
    // Apply stock filter - check both stock status methods
    if (stock) {
        filtered = filtered.filter(p => {
            // Check productQuantity for stock status
            const quantity = p.productQuantity || 0;
            const hasStockField = p.productStock !== undefined;
            const stockStatusFromField = p.productStock || '';
          
            let stockStatus;
          
            // First try to get stock status from productStock field
            if (hasStockField) {
                stockStatus = stockStatusFromField;
                console.log(`Product ${p.productId}: Using productStock field: "${stockStatus}"`);
            } else {
                // Otherwise calculate from quantity
                stockStatus = getStockStatus(quantity);
                console.log(`Product ${p.productId}: Calculated from quantity ${quantity}: "${stockStatus}"`);
            }
          
            // Normalize stock status for comparison
            const normalizedStatus = stockStatus.toLowerCase().replace(/\s+/g, '-');
            console.log(`Product ${p.productId}: Normalized status: "${normalizedStatus}" vs filter: "${stock}"`);
          
            if (stock === 'in-stock') {
                return normalizedStatus === 'in-stock' || normalizedStatus === 'in-stock' || normalizedStatus.includes('in');
            }
            if (stock === 'low-stock') {
                return normalizedStatus === 'low-stock' || normalizedStatus.includes('low');
            }
            if (stock === 'out-of-stock') {
                return normalizedStatus === 'out-of-stock' || normalizedStatus.includes('out') || normalizedStatus === 'no-stock';
            }
            return true;
        });
        console.log(`After stock filter (${stock}):`, filtered.length);
      
        // Debug: Show what products passed the filter
        filtered.slice(0, 3).forEach((p, i) => {
            const quantity = p.productQuantity || 0;
            const stockField = p.productStock || 'N/A';
            console.log(` Sample filtered product ${i+1}: ID=${p.productId}, Quantity=${quantity}, productStock="${stockField}"`);
        });
    }
  
    // Apply verification filter
    if (verification) {
        filtered = filtered.filter(p => {
            const status = p.approved === true ? 'APPROVED' :
                          p.approved === false ? 'REJECTED' : 'PENDING';
            return status === verification;
        });
        console.log(`After verification filter (${verification}):`, filtered.length);
    }
  
    // Apply search filter
    if (searchTerm && searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase().trim();
        filtered = filtered.filter(p => {
            // Search in multiple fields
            return (
                (p.productName && p.productName.toLowerCase().includes(term)) ||
                (p.sku && p.sku.toLowerCase().includes(term)) ||
                (p.productCategory && p.productCategory.toLowerCase().includes(term)) ||
                (p.productSubCategory && p.productSubCategory.toLowerCase().includes(term)) ||
                (p.brandName && p.brandName.toLowerCase().includes(term)) ||
                (p.batchNo && p.batchNo.toLowerCase().includes(term))
            );
        });
        console.log(`After search filter (${searchTerm}):`, filtered.length);
    }
  
    // Update filtered products and reset to first page
    filteredProducts = filtered;
    currentPage = 1;
  
    // Initialize pagination if not already done
    if (!document.getElementById('pageSizeSelect')) {
        setupPaginationControls();
    }
  
    // Render the table with filtered results
    renderTable();
  
    // Update stats based on filtered results
    updateStatsWithFilteredData(filtered);
}

// ============================================
// EVENT HANDLERS (unchanged)
// ============================================
function setupEventListeners() {
    console.log('Setting up event listeners...');
  
    // Sidebar toggle buttons
    const toggleSidebarLogo = document.getElementById('toggle-sidebar-logo');
    const closeSidebar = document.getElementById('close-sidebar');
    const toggleSidebarMobile = document.getElementById('toggle-sidebar-mobile');
    const toggleSidebarDesktop = document.getElementById('toggle-sidebar-desktop');
  
    if (toggleSidebarLogo) toggleSidebarLogo.addEventListener('click', toggleSidebar);
    if (closeSidebar) closeSidebar.addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('translate-x-0');
    });
    if (toggleSidebarMobile) toggleSidebarMobile.addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.toggle('translate-x-0');
    });
    if (toggleSidebarDesktop) toggleSidebarDesktop.addEventListener('click', toggleSidebar);
  
    // Modal close buttons
    const closeDetailModal = document.getElementById('closeDetailModal');
    const closeEditModal = document.getElementById('closeEditModal');
    const cancelEdit = document.getElementById('cancelEdit');
    const closeSuccessPopup = document.getElementById('closeSuccessPopup');
    const closeBarcodeModal = document.getElementById('closeBarcodeModal');
    const cancelBarcode = document.getElementById('cancelBarcode');
  
    if (closeDetailModal) closeDetailModal.addEventListener('click', () => {
        const modal = document.getElementById('productDetailModal');
        if (modal) modal.style.display = 'none';
    });
  
    if (closeEditModal) closeEditModal.addEventListener('click', () => {
        const modal = document.getElementById('editProductModal');
        if (modal) {
            modal.style.display = 'none';
            resetEditForm();
        }
    });
  
    if (cancelEdit) cancelEdit.addEventListener('click', () => {
        const modal = document.getElementById('editProductModal');
        if (modal) {
            modal.style.display = 'none';
            resetEditForm();
        }
    });
  
    if (closeSuccessPopup) closeSuccessPopup.addEventListener('click', () => {
        const popup = document.getElementById('successPopup');
        if (popup) popup.style.display = 'none';
    });
  
    if (closeBarcodeModal) closeBarcodeModal.addEventListener('click', closeBarcodeModalFunc);
    if (cancelBarcode) cancelBarcode.addEventListener('click', closeBarcodeModalFunc);
  
    // Add product button
    const addProductBtn = document.getElementById('addProductBtn');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', () => {
            openEditModal(); // No parameter for new product
        });
    }
  
    // Form submissions
    const editProductForm = document.getElementById('editProductForm');
    if (editProductForm) {
        editProductForm.addEventListener('submit', handleFormSubmit);
    }
  
    // Category change handlers
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            populateSubcategoryDropdown(this.value);
            applyFilters();
        });
    }
  
    const editCategory = document.getElementById('edit-category');
    if (editCategory) {
        editCategory.addEventListener('change', function() {
            const otherContainer = document.getElementById('category-other-container');
            const otherInput = document.getElementById('edit-category-other');
          
            if (this.value === 'Other') {
                if (otherContainer) otherContainer.classList.remove('hidden');
                if (otherInput) otherInput.required = true;
            } else {
                if (otherContainer) otherContainer.classList.add('hidden');
                if (otherInput) {
                    otherInput.required = false;
                    otherInput.value = '';
                }
            }
          
            populateSubcategoryDropdown(this.value);
        });
    }
  
    const editType = document.getElementById('edit-type');
    if (editType) {
        editType.addEventListener('change', function() {
            const otherContainer = document.getElementById('type-other-container');
            const otherInput = document.getElementById('edit-type-other');
          
            if (this.value === 'Other') {
                if (otherContainer) otherContainer.classList.remove('hidden');
                if (otherInput) otherInput.required = true;
            } else {
                if (otherContainer) otherContainer.classList.add('hidden');
                if (otherInput) {
                    otherInput.required = false;
                    otherInput.value = '';
                }
            }
        });
    }
  
    // Filters
    const subcategoryFilter = document.getElementById('subcategoryFilter');
    const prescriptionFilter = document.getElementById('prescriptionFilter');
    const stockFilter = document.getElementById('stockFilter');
    const verificationFilter = document.getElementById('verificationFilter');
  
    if (subcategoryFilter) subcategoryFilter.addEventListener('change', applyFilters);
    if (prescriptionFilter) prescriptionFilter.addEventListener('change', applyFilters);
    if (stockFilter) stockFilter.addEventListener('change', applyFilters);
    if (verificationFilter) verificationFilter.addEventListener('change', applyFilters);
  
    // Search functionality
    let searchTimeout;
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchTerm = this.value;
                console.log('Search term updated:', searchTerm);
                applyAllFilters();
            }, 500);
        });
      
        // Add clear search button
        const searchClearBtn = document.createElement('button');
        searchClearBtn.innerHTML = '<i class="fas fa-times"></i>';
        searchClearBtn.className = 'absolute right-10 top-3 text-gray-400 hover:text-gray-600 cursor-pointer';
        searchClearBtn.title = 'Clear search';
        searchClearBtn.onclick = function() {
            document.getElementById('searchInput').value = '';
            searchTerm = '';
            applyAllFilters();
        };
        searchInput.parentNode.appendChild(searchClearBtn);
    }
  
    // Select all checkbox
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            const checkboxes = document.querySelectorAll('.product-checkbox');
            checkboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
            updateSelectedProductsForBarcode();
        });
    }
  
    // Verification modal event listeners
    const verificationModal = document.getElementById('verificationModal');
    const cancelVerificationBtn = document.getElementById('cancelVerification');
    const submitVerificationBtn = document.getElementById('submitVerification');
    const actionRadios = document.querySelectorAll('input[name="verificationAction"]');
  
    if (verificationModal) {
        verificationModal.addEventListener('click', function(e) {
            if (e.target === verificationModal) {
                closeVerificationModal();
            }
        });
    }
  
    if (cancelVerificationBtn) {
        cancelVerificationBtn.addEventListener('click', closeVerificationModal);
    }
  
    if (submitVerificationBtn) {
        submitVerificationBtn.addEventListener('click', submitVerification);
    }
  
    if (actionRadios.length > 0) {
        actionRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                updateVerificationSubmitButton();
            });
        });
    }
  
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        const modals = ['productDetailModal', 'editProductModal', 'successPopup', 'verificationModal', 'barcodeModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal && e.target === modal) {
                if (modalId === 'verificationModal') {
                    closeVerificationModal();
                } else if (modalId === 'editProductModal') {
                    modal.style.display = 'none';
                    resetEditForm();
                } else if (modalId === 'barcodeModal') {
                    closeBarcodeModalFunc();
                } else {
                    modal.style.display = 'none';
                }
            }
        });
    });
  
    // Generate barcode dropdown functionality
    const generateBarcodeBtn = document.getElementById('generateBarcodeBtn');
    if (generateBarcodeBtn) {
        // Add event listeners to the dropdown buttons in HTML
        // These are already set with onclick handlers in the HTML
    }
  
    // Logout modal event listeners
    const logoutBtn = document.getElementById('logoutBtn');
    const logoutModal = document.getElementById('logoutModal');
    const confirmLogout = document.getElementById('confirmLogout');
    const cancelLogout = document.getElementById('cancelLogout');
    const closeLogoutModal = document.getElementById('closeLogoutModal');
  
    if (logoutBtn && logoutModal) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logoutModal.classList.remove('hidden');
        });
    }
  
    function closeLogout() {
        if (logoutModal) logoutModal.classList.add('hidden');
    }
  
    if (cancelLogout) cancelLogout.addEventListener('click', closeLogout);
    if (closeLogoutModal) closeLogoutModal.addEventListener('click', closeLogout);
    if (logoutModal) {
        logoutModal.addEventListener('click', (e) => {
            if (e.target === logoutModal) closeLogout();
        });
    }
  
    if (confirmLogout) {
        confirmLogout.addEventListener('click', () => {
            window.location.href = '../Login/login.html';
        });
    }
  
    console.log('Event listeners setup complete including barcode functionality');
}

// Individual filter handlers
function applyFilters() {
    console.log('applyFilters called - refreshing all filters');
    applyAllFilters();
}

// ============================================
// ATTACH TABLE EVENT LISTENERS (unchanged)
// ============================================
function attachTableEventListeners() {
    // View buttons
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', async function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-id');
            const product = filteredProducts.find(p => p.productId == productId);
            if (product) {
                console.log('View button clicked for product:', product.productName);
                await showProductDetails(product);
            }
        });
    });
  
    // Edit buttons
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-id');
            const product = filteredProducts.find(p => p.productId == productId);
            if (product) {
                console.log('Edit button clicked for product:', product.productName);
                openEditModal(product);
            }
        });
    });
  
    // Delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', async function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-id');
            const product = filteredProducts.find(p => p.productId == productId);
            if (product) {
                console.log('Delete button clicked for product:', product.productName);
                await deleteProduct(product);
            }
        });
    });
  
    // Barcode buttons in action column
    document.querySelectorAll('.barcode-action-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-id');
            const product = filteredProducts.find(p => p.productId == productId);
            if (product) {
                console.log('Barcode button clicked for product:', product.productName);
                generateSingleBarcode(productId);
            }
        });
    });
  
    // Verify/Approve buttons (for pending products)
    document.querySelectorAll('.verify-btn').forEach(button => {
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
      
        newButton.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-id');
            console.log('Verify/Approve button clicked for product ID:', productId);
            const product = filteredProducts.find(p => p.productId == productId);
            if (product) {
                showVerificationModal(product, 'APPROVE');
            }
        });
    });
  
    // Reject buttons (for pending products)
    document.querySelectorAll('.reject-btn').forEach(button => {
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
      
        newButton.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-id');
            console.log('Reject button clicked for product ID:', productId);
            const product = filteredProducts.find(p => p.productId == productId);
            if (product) {
                showVerificationModal(product, 'REJECT');
            }
        });
    });
  
    // Unapprove buttons (for approved products)
    document.querySelectorAll('.unapprove-btn').forEach(button => {
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
      
        newButton.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-id');
            console.log('Unapprove button clicked for product ID:', productId);
            const product = filteredProducts.find(p => p.productId == productId);
            if (product) {
                showVerificationModal(product, 'REJECT');
            }
        });
    });
  
    // Re-approve buttons (for rejected products)
    document.querySelectorAll('.reapprove-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-id');
            const product = filteredProducts.find(p => p.productId == productId);
            if (product) {
                console.log('Re-approve button clicked for product:', product.productName);
                showVerificationModal(product, 'APPROVE');
            }
        });
    });
  
    // Checkbox event listeners
    document.querySelectorAll('.product-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedProductsForBarcode);
    });
}

// ============================================
// VERIFICATION FUNCTIONS (unchanged)
// ============================================
let currentVerificationProduct = null;
function showVerificationModal(product, action = null) {
    console.log('Showing verification modal for:', product.productName);
  
    currentVerificationProduct = product;
  
    const modal = document.getElementById('verificationModal');
    const productName = document.getElementById('verificationProductName');
    const sku = document.getElementById('verificationSku');
    const category = document.getElementById('verificationCategory');
    const brand = document.getElementById('verificationBrand');
    const status = document.getElementById('verificationStatus');
    const actionRadios = document.querySelectorAll('input[name="verificationAction"]');
    const submitBtn = document.getElementById('submitVerification');
    const modalTitle = document.getElementById('verificationModalTitle');
  
    if (!modal) {
        console.error('Verification modal not found!');
        return;
    }
  
    // Update product info
    productName.textContent = product.productName || 'N/A';
    sku.textContent = product.sku || 'N/A';
    category.textContent = product.productCategory || 'N/A';
    brand.textContent = product.brandName || 'N/A';
  
    // Update status badge
    const verificationStatus = product.approved === true ? 'APPROVED' :
                               product.approved === false ? 'REJECTED' : 'PENDING';
    status.innerHTML = `<span class="px-2 py-1 rounded-full text-xs font-medium ${
        verificationStatus === 'APPROVED' ? 'bg-green-100 text-green-800' :
        verificationStatus === 'REJECTED' ? 'bg-red-100 text-red-800' :
        'bg-yellow-100 text-yellow-800'
    }">${verificationStatus}</span>`;
  
    // Reset form
    actionRadios.forEach(radio => {
        radio.checked = false;
    });
  
    submitBtn.disabled = true;
  
    // Set modal title
    if (action === 'APPROVE') {
        modalTitle.textContent = 'Approve Product';
    } else if (action === 'REJECT') {
        modalTitle.textContent = 'Reject Product';
    } else {
        modalTitle.textContent = 'Verify Product';
    }
  
    // If a specific action is passed (from clicking approve/reject buttons), pre-select it
    if (action === 'APPROVE') {
        const approveRadio = document.querySelector('input[value="APPROVE"]');
        if (approveRadio) {
            approveRadio.checked = true;
            updateVerificationSubmitButton();
        }
    } else if (action === 'REJECT') {
        const rejectRadio = document.querySelector('input[value="REJECT"]');
        if (rejectRadio) {
            rejectRadio.checked = true;
            updateVerificationSubmitButton();
        }
    }
  
    // Show modal
    modal.classList.remove('hidden');
  
    // Focus on first radio button
    setTimeout(() => {
        if (actionRadios.length > 0) {
            actionRadios[0].focus();
        }
    }, 100);
}

function updateVerificationSubmitButton() {
    const actionRadios = document.querySelectorAll('input[name="verificationAction"]');
    const submitBtn = document.getElementById('submitVerification');
  
    if (!submitBtn) return;
  
    const hasSelection = Array.from(actionRadios).some(radio => radio.checked);
    submitBtn.disabled = !hasSelection;
  
    // Update button text and color based on selected action
    const selectedAction = Array.from(actionRadios).find(radio => radio.checked);
    if (selectedAction) {
        if (selectedAction.value === 'APPROVE') {
            submitBtn.textContent = 'Approve Product';
            submitBtn.className = 'flex-1 px-4 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
        } else {
            submitBtn.textContent = 'Reject Product';
            submitBtn.className = 'flex-1 px-4 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
        }
    }
}

function closeVerificationModal() {
    const modal = document.getElementById('verificationModal');
    if (modal) {
        modal.classList.add('hidden');
    }
    currentVerificationProduct = null;
}

async function submitVerification() {
    if (!currentVerificationProduct) {
        showSuccessPopup('No product selected for verification', 'error');
        return;
    }
  
    const actionRadios = document.querySelectorAll('input[name="verificationAction"]');
    const selectedAction = Array.from(actionRadios).find(radio => radio.checked);
  
    if (!selectedAction) {
        showSuccessPopup('Please select an action', 'error');
        return;
    }
  
    const action = selectedAction.value;
    const productId = currentVerificationProduct.productId;
    const productName = currentVerificationProduct.productName;
  
    console.log(`Submitting verification for product ${productId} (${productName}): ${action}`);
  
    try {
        // Show loading state
        const submitBtn = document.getElementById('submitVerification');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Processing...';
        submitBtn.disabled = true;
      
        // Call verification API
        await verificationService.verifyProduct(productId, action);
      
        // Show success message
        const actionText = action === 'APPROVE' ? 'approved' : 'rejected';
        showSuccessPopup(`"${productName}" ${actionText} successfully!`);
      
        // Close modal
        closeVerificationModal();
      
        // Reload products to reflect changes
        await loadProducts();
      
    } catch (error) {
        console.error(`Error ${action.toLowerCase()}ing product:`, error);
        showSuccessPopup(`Error: ${error.message}`, 'error');
      
        // Reset button
        const submitBtn = document.getElementById('submitVerification');
        if (submitBtn) {
            submitBtn.textContent = action === 'APPROVE' ? 'Approve Product' : 'Reject Product';
            submitBtn.disabled = false;
        }
    }
}

// ============================================
// STATS AND FILTER FUNCTIONS (unchanged)
// ============================================
async function updateStats() {
    try {
        const products = await productService.getAllProducts(0, 1000);
      
        const total = products.length;
        const lowStock = products.filter(p => getStockStatus(p.productQuantity) === 'Low Stock').length;
        const inStock = products.filter(p => getStockStatus(p.productQuantity) === 'In Stock').length;
        const expiring = products.filter(p => isExpiringSoon(p.expDate)).length;
        const pendingVerification = products.filter(p => p.approved === null || p.approved === false).length;
        document.getElementById('totalProducts').textContent = total;
        document.getElementById('lowStockItems').textContent = lowStock;
        document.getElementById('inStockProducts').textContent = inStock;
        document.getElementById('expiringSoon').textContent = expiring;
        document.getElementById('pendingVerification').textContent = pendingVerification;
    } catch (error) {
        console.error('Error updating stats:', error);
        document.getElementById('totalProducts').textContent = '0';
        document.getElementById('lowStockItems').textContent = '0';
        document.getElementById('inStockProducts').textContent = '0';
        document.getElementById('expiringSoon').textContent = '0';
        document.getElementById('pendingVerification').textContent = '0';
    }
}

function updateStatsWithFilteredData(filtered) {
    const total = filtered.length;
    const lowStock = filtered.filter(p => getStockStatus(p.productQuantity) === 'Low Stock').length;
    const inStock = filtered.filter(p => getStockStatus(p.productQuantity) === 'In Stock').length;
    const expiring = filtered.filter(p => isExpiringSoon(p.expDate)).length;
    const pendingVerification = filtered.filter(p => p.approved === null || p.approved === false).length;
  
    // Update stats display
    document.getElementById('totalProducts').textContent = total;
    document.getElementById('lowStockItems').textContent = lowStock;
    document.getElementById('inStockProducts').textContent = inStock;
    document.getElementById('expiringSoon').textContent = expiring;
    document.getElementById('pendingVerification').textContent = pendingVerification;
}

// ============================================
// PRODUCT DETAILS MODAL (unchanged)
// ============================================
async function showProductDetails(product) {
    try {
        const productDetails = await productService.getProductById(product.productId);
        console.log('Product details fetched:', productDetails);
      
        const productDetailModal = document.getElementById('productDetailModal');
      
        // Set basic information
        document.getElementById('detail-id').textContent = productDetails.productId || 'N/A';
        document.getElementById('detail-sku').textContent = productDetails.sku || 'N/A';
        document.getElementById('detail-name').textContent = productDetails.productName || 'N/A';
        document.getElementById('detail-category').textContent = productDetails.productCategory || 'N/A';
        document.getElementById('detail-type').textContent = productDetails.productSubCategory || 'N/A';
        document.getElementById('detail-brand').textContent = productDetails.brandName || 'N/A';
        document.getElementById('detail-prescription').textContent = productDetails.prescriptionRequired ? 'Yes' : 'No';
        document.getElementById('detail-status').innerHTML = `<span class="status-badge ${productDetails.productStatus === 'Available' ? 'status-available' : productDetails.productStatus === 'Unavailable' ? 'status-unavailable' : 'status-discontinued'}">${productDetails.productStatus || 'N/A'}</span>`;
        document.getElementById('detail-quantity').textContent = `${productDetails.productQuantity || 0} ${productDetails.unit || 'unit'}`;
        document.getElementById('detail-unit').textContent = productDetails.unit || 'N/A';
      
        // Handle dynamic pricing display
        const sizes = productDetails.productSizes || [];
        const prices = productDetails.productPrice || [];
        const oldPrices = productDetails.productOldPrice || [];
      
        let pricingHtml = '';
        if (sizes.length > 0) {
            sizes.forEach((size, index) => {
                const price = prices[index] || 'N/A';
                const oldPrice = oldPrices[index];
              
                pricingHtml += `
                    <div class="mb-2 p-2 bg-gray-50 rounded">
                        <strong>${size}:</strong>
                        <span class="font-semibold text-green-600">₹${Number(price).toFixed(2)}</span>
                        ${oldPrice ? `<span class="ml-2 text-sm text-gray-500 line-through">₹${Number(oldPrice).toFixed(2)}</span>` : ''}
                    </div>
                `;
            });
        } else if (prices.length > 0) {
            prices.forEach((price, index) => {
                const oldPrice = oldPrices[index];
                pricingHtml += `
                    <div class="mb-2 p-2 bg-gray-50 rounded">
                        <strong>Variant ${index + 1}:</strong>
                        <span class="font-semibold text-green-600">₹${Number(price).toFixed(2)}</span>
                        ${oldPrice ? `<span class="ml-2 text-sm text-gray-500 line-through">₹${Number(oldPrice).toFixed(2)}</span>` : ''}
                    </div>
                `;
            });
        } else {
            pricingHtml = 'N/A';
        }
      
        document.getElementById('detail-mrp').innerHTML = pricingHtml;
        document.getElementById('detail-price').innerHTML = pricingHtml;
        document.getElementById('detail-old-price').innerHTML = oldPrices.length > 0 ? 'See pricing above' : 'N/A';
      
        document.getElementById('detail-rating').innerHTML = `${getStarRating(productDetails.rating || 0)} ${(productDetails.rating || 0).toFixed(1)}`;
        document.getElementById('detail-batch').textContent = productDetails.batchNo || 'N/A';
        document.getElementById('detail-mfg-date').textContent = formatDate(productDetails.mfgDate);
        document.getElementById('detail-expiry').textContent = formatDate(productDetails.expDate);
        document.getElementById('detail-description').textContent = productDetails.productDescription || 'N/A';
      
        // Benefits
        const benefitsList = document.getElementById('detail-benefits');
        benefitsList.innerHTML = '';
        if (productDetails.benefitsList && productDetails.benefitsList.length > 0) {
            productDetails.benefitsList.forEach(benefit => {
                const li = document.createElement('li');
                li.textContent = `• ${benefit}`;
                benefitsList.appendChild(li);
            });
        } else {
            benefitsList.textContent = 'N/A';
        }
      
        // Directions
        const directionsList = document.getElementById('detail-directions');
        directionsList.innerHTML = '';
        if (productDetails.directionsList && productDetails.directionsList.length > 0) {
            productDetails.directionsList.forEach(direction => {
                const li = document.createElement('li');
                li.textContent = `• ${direction}`;
                directionsList.appendChild(li);
            });
        } else {
            directionsList.textContent = 'N/A';
        }
      
        // Ingredients
        const ingredientsList = document.getElementById('detail-ingredients');
        ingredientsList.innerHTML = '';
        if (productDetails.ingredientsList && productDetails.ingredientsList.length > 0) {
            productDetails.ingredientsList.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = `• ${ingredient}`;
                ingredientsList.appendChild(li);
            });
        } else {
            ingredientsList.textContent = 'N/A';
        }
      
        // Sizes
        const sizesContainer = document.getElementById('detail-sizes');
        sizesContainer.innerHTML = '';
        if (sizes.length > 0) {
            sizes.forEach(size => {
                const span = document.createElement('span');
                span.className = 'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2';
                span.textContent = size;
                sizesContainer.appendChild(span);
            });
        } else {
            sizesContainer.textContent = 'N/A';
        }
      
        // Dynamic Fields
        const dynamicFields = document.getElementById('detail-dynamic-fields');
        dynamicFields.innerHTML = '';
      
        if (productDetails.productDynamicFields && typeof productDetails.productDynamicFields === 'object') {
            Object.entries(productDetails.productDynamicFields).forEach(([key, value]) => {
                if (value !== null && value !== undefined) {
                    const div = document.createElement('div');
                    div.className = 'mb-1';
                    const formattedKey = key.replace(/([A-Z])/g, ' $1')
                                           .replace(/^./, str => str.toUpperCase())
                                           .trim();
                    div.textContent = `${formattedKey}: ${value}`;
                    dynamicFields.appendChild(div);
                }
            });
        }
      
        if (!dynamicFields.innerHTML) dynamicFields.textContent = 'N/A';
      
        const stockStatus = getStockStatus(productDetails.productQuantity);
        const stockStatusElement = document.getElementById('detail-stock-status');
        stockStatusElement.textContent = stockStatus;
        stockStatusElement.className = `status-badge ${stockStatus === 'In Stock' ? 'status-in-stock' : stockStatus === 'Low Stock' ? 'status-low-stock' : 'status-out-of-stock'}`;
      
        // Verification Details
        const verificationStatus = productDetails.approved === true ? 'APPROVED' :
                                 productDetails.approved === false ? 'REJECTED' : 'PENDING';
        const verificationElement = document.getElementById('detail-verification-status');
        verificationElement.innerHTML = `<span class="status-badge ${verificationStatus === 'APPROVED' ? 'status-approved' : verificationStatus === 'REJECTED' ? 'status-rejected' : 'status-pending'}">${verificationStatus}</span>`;
      
        // Hide verification details sections since API doesn't have these fields
        document.getElementById('detail-verified-by-container').style.display = 'none';
        document.getElementById('detail-verified-at-container').style.display = 'none';
        document.getElementById('detail-rejection-reason-container').style.display = 'none';
        document.getElementById('detail-added').textContent = formatDate(productDetails.createdAt);
        document.getElementById('detail-updated').textContent = formatDate(productDetails.createdAt);
      
        // Images
        const mainImageContainer = document.getElementById('detail-main-image');
        mainImageContainer.innerHTML = '';
        if (productDetails.productMainImage) {
            const mainImg = document.createElement('img');
            mainImg.src = productDetails.productMainImage;
            mainImg.alt = 'Main Product Image';
            mainImg.className = 'product-image rounded-lg shadow-md max-w-full h-auto';
            mainImg.onerror = function() {
                this.src = 'https://via.placeholder.com/150?text=No+Image';
                console.error('Failed to load main image:', productDetails.productMainImage);
            };
            mainImageContainer.appendChild(mainImg);
        } else {
            mainImageContainer.textContent = 'No main image';
        }
      
        const detailImages = document.getElementById('detail-images');
        detailImages.innerHTML = '';
        if (productDetails.productSubImages && productDetails.productSubImages.length > 0) {
            productDetails.productSubImages.forEach((img, index) => {
                if (!img) return;
              
                const imgContainer = document.createElement('div');
                imgContainer.className = 'relative';
              
                const imgElement = document.createElement('img');
                imgElement.src = img;
                imgElement.alt = `Product Image ${index + 1}`;
                imgElement.className = 'w-full h-32 object-cover rounded-lg shadow-sm';
                imgElement.onerror = function() {
                    this.src = 'https://via.placeholder.com/150?text=No+Image';
                    console.error('Failed to load sub image:', img);
                };
                imgContainer.appendChild(imgElement);
              
                if (index === 0) {
                    const badge = document.createElement('span');
                    badge.className = 'absolute top-1 left-1 bg-blue-500 text-white text-xs px-2 py-1 rounded';
                    badge.textContent = 'Main';
                    imgContainer.appendChild(badge);
                }
              
                detailImages.appendChild(imgContainer);
            });
        } else {
            detailImages.textContent = 'No additional images available';
        }
      
        // Update edit button to use the productDetails with fixed image URLs
        document.getElementById('editProductBtn').onclick = () => openEditModal(productDetails);
      
        productDetailModal.style.display = 'flex';
      
        console.log('Product details modal displayed');
    } catch (error) {
        console.error('Error showing product details:', error);
        console.error('Error details:', {
            message: error.message,
            stack: error.stack
        });
        showSuccessPopup('Error loading product details: ' + error.message, 'error');
    }
}

// ============================================
// FORM SUBMISSION AND VALIDATION (unchanged)
// ============================================
async function handleFormSubmit(e) {
    e.preventDefault();
    try {
        console.log('=== FORM SUBMISSION STARTED ===');
      
        // Get price data
        const priceData = getPriceData();
      
        // Get sizes
        const sizesInput = document.getElementById('edit-sizes').value.trim();
        const sizes = sizesInput ? sizesInput.split(',').map(s => s.trim()).filter(s => s) : [];
      
        // Get benefits, directions, ingredients
        const benefits = document.getElementById('edit-benefits').value
            .split('\n')
            .filter(b => b.trim())
            .map(b => b.trim());
          
        const directionsInput = document.getElementById('edit-directions');
        const directions = directionsInput ? directionsInput.value
            .split('\n')
            .filter(d => d.trim())
            .map(d => d.trim()) : [];
          
        const ingredients = document.getElementById('edit-ingredients').value
            .split(',')
            .filter(i => i.trim())
            .map(i => i.trim());
      
        // Prepare product data
        const productData = {
            // Basic information
            sku: document.getElementById('edit-sku').value.trim(),
            name: document.getElementById('edit-name').value.trim(),
            category: document.getElementById('edit-category').value === 'Other'
                ? document.getElementById('edit-category-other').value.trim()
                : document.getElementById('edit-category').value,
            type: document.getElementById('edit-type').value === 'Other'
                ? document.getElementById('edit-type-other').value.trim()
                : document.getElementById('edit-type').value,
            brand: document.getElementById('edit-brand').value.trim(),
            description: document.getElementById('edit-description').value.trim(),
          
            // Stock & pricing
            prices: priceData.prices,
            oldPrices: priceData.oldPrices,
            quantity: parseInt(document.getElementById('edit-quantity').value) || 0,
          
            // Status & requirements
            status: document.getElementById('edit-status').value,
            prescription: document.getElementById('edit-prescription').value,
          
            // Dates & batch
            mfgDate: document.getElementById('edit-mfg-date').value,
            expiry: document.getElementById('edit-expiry').value,
            batch: document.getElementById('edit-batch').value.trim(),
          
            // Rating
            rating: parseFloat(document.getElementById('edit-rating').value) || 0,
          
            // Lists
            benefits: benefits,
            ingredients: ingredients,
            directions: directions,
            sizes: sizes,
          
            // Dynamic fields
            strength: document.getElementById('edit-strength').value.trim() || '',
            form: document.getElementById('edit-form').value.trim() || '',
            dosage: document.getElementById('edit-dosage').value.trim() || ''
        };
      
        console.log('Product data to be sent:', productData);
      
        // Validation
        if (!productData.sku || !productData.name) {
            showSuccessPopup('SKU and Product Name are required', 'error');
            return;
        }
      
        if (!productData.category || !productData.type) {
            showSuccessPopup('Category and Subcategory are required', 'error');
            return;
        }
      
        if (productData.prices.length === 0) {
            showSuccessPopup('At least one price is required', 'error');
            return;
        }
      
        // Check for negative prices
        if (productData.prices.some(price => price <= 0)) {
            showSuccessPopup('All prices must be greater than zero', 'error');
            return;
        }
      
        // Check quantity
        if (productData.quantity < 0) {
            showSuccessPopup('Quantity must be non-negative', 'error');
            return;
        }
      
        // Get main image
        const mainImageInput = document.getElementById('edit-main-image');
        let mainImage = null;
        if (mainImageInput && mainImageInput.files && mainImageInput.files[0]) {
            mainImage = mainImageInput.files[0];
        } else if (!currentProductId) {
            // Only require image for new products
            showSuccessPopup('Main product image is required for new products', 'error');
            return;
        }
      
        // Get sub images
        const subImages = [];
        for (let i = 1; i <= 4; i++) {
            const subImageInput = document.getElementById(`edit-image${i}`);
            if (subImageInput && subImageInput.files && subImageInput.files[0]) {
                subImages.push(subImageInput.files[0]);
            }
        }
      
        // Make API call
        let result;
        if (currentProductId) {
            // Update existing product
            result = await productService.updateProduct(currentProductId, productData, mainImage, subImages);
            showSuccessPopup('Product updated successfully!');
        } else {
            // Create new product
            result = await productService.createProduct(productData, mainImage, subImages);
            showSuccessPopup('Product added successfully! It is now pending verification.');
        }
      
        // Close modal and reset
        const editProductModal = document.getElementById('editProductModal');
        if (editProductModal) editProductModal.style.display = 'none';
      
        resetEditForm();
      
        // Reload products
        await loadProducts();
      
    } catch (error) {
        console.error('Error in handleFormSubmit:', error);
        console.error('Error stack:', error.stack);
        showSuccessPopup(error.message || 'Error saving product. Check console for details.', 'error');
    }
}

// ============================================
// BARCODE AND QR CODE GENERATION FUNCTIONS (unchanged)
// ============================================
// Initialize barcode functionality
function initializeBarcodeFunctionality() {
    // Add event listeners for barcode settings
    const barcodeFormat = document.getElementById('barcodeFormat');
    const barcodeType = document.getElementById('barcodeType');
    const barcodeWidth = document.getElementById('barcodeWidth');
    const barcodeHeight = document.getElementById('barcodeHeight');
    const includeProductInfo = document.getElementById('includeProductInfo');
    const customBarcodeText = document.getElementById('customBarcodeText');
  
    if (barcodeFormat) {
        barcodeFormat.addEventListener('change', function() {
            const customContainer = document.getElementById('customTextContainer');
            if (this.value === 'custom') {
                customContainer.classList.remove('hidden');
            } else {
                customContainer.classList.add('hidden');
            }
            updateBarcodePreview();
        });
    }
  
    if (barcodeType) barcodeType.addEventListener('change', updateBarcodePreview);
    if (barcodeWidth) barcodeWidth.addEventListener('input', updateBarcodePreview);
    if (barcodeHeight) barcodeHeight.addEventListener('input', updateBarcodePreview);
    if (includeProductInfo) includeProductInfo.addEventListener('change', updateBarcodePreview);
    if (customBarcodeText) customBarcodeText.addEventListener('input', updateBarcodePreview);
  
    console.log('Barcode functionality initialized');
}

// Update selected products for barcode
function updateSelectedProductsForBarcode() {
    selectedProductsForBarcode = [];
    const checkboxes = document.querySelectorAll('.product-checkbox:checked');
  
    checkboxes.forEach(checkbox => {
        const productId = checkbox.getAttribute('data-id');
        const product = filteredProducts.find(p => p.productId == productId);
        if (product) {
            selectedProductsForBarcode.push(product);
        }
    });
  
    console.log(`Selected ${selectedProductsForBarcode.length} products for barcode generation`);
}

// Open barcode modal for selected products
function openBarcodeModalForSelected() {
    updateSelectedProductsForBarcode();
    if (selectedProductsForBarcode.length === 0) {
        showSuccessPopup('Please select at least one product', 'error');
        return;
    }
    openBarcodeModal();
}

// Open barcode modal for all filtered products
function openBarcodeModalForAll() {
    selectedProductsForBarcode = [...filteredProducts];
    openBarcodeModal();
}

// Open barcode modal for single product
function generateSingleBarcode(productId) {
    const product = filteredProducts.find(p => p.productId == productId);
    if (!product) {
        showSuccessPopup('Product not found', 'error');
        return;
    }
  
    selectedProductsForBarcode = [product];
    openBarcodeModal();
}

// Open barcode modal
function openBarcodeModal() {
    if (selectedProductsForBarcode.length === 0) {
        showSuccessPopup('No products selected', 'error');
        return;
    }
  
    const modal = document.getElementById('barcodeModal');
    if (!modal) return;
  
    // Update selected products list
    updateSelectedProductsList();
  
    // Update counts
    document.getElementById('selectedCount').textContent = `${selectedProductsForBarcode.length} products selected`;
    document.getElementById('totalBarcodes').textContent = selectedProductsForBarcode.length;
  
    // Reset form to defaults
    document.getElementById('barcodeType').value = 'CODE128';
    document.getElementById('barcodeFormat').value = 'sku';
    document.getElementById('barcodeWidth').value = '2';
    document.getElementById('barcodeHeight').value = '40';
    document.getElementById('includeProductInfo').checked = true;
    document.getElementById('customTextContainer').classList.add('hidden');
    document.getElementById('customBarcodeText').value = '';
  
    // Show modal
    modal.style.display = 'flex';
  
    // Generate initial preview
    setTimeout(updateBarcodePreview, 100);
}

// Close barcode modal
function closeBarcodeModalFunc() {
    const modal = document.getElementById('barcodeModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Update selected products list
function updateSelectedProductsList() {
    const container = document.getElementById('selectedProductsList');
    if (!container) return;
  
    container.innerHTML = '';
  
    selectedProductsForBarcode.slice(0, 10).forEach(product => {
        const barcodeData = getBarcodeData(product);
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-100 hover:bg-gray-50';
        row.innerHTML = `
            <td class="py-2 px-3">${product.productName || 'N/A'}</td>
            <td class="py-2 px-3">${product.sku || 'N/A'}</td>
            <td class="py-2 px-3">₹${product.productPrice?.[0] || '0.00'}</td>
            <td class="py-2 px-3 text-center font-mono text-xs">${barcodeData}</td>
        `;
        container.appendChild(row);
    });
  
    if (selectedProductsForBarcode.length > 10) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="4" class="py-2 px-3 text-center text-sm text-gray-500">
                ... and ${selectedProductsForBarcode.length - 10} more products
            </td>
        `;
        container.appendChild(row);
    }
}

// Helper function to get barcode data (ensure this exists in your code)
function getBarcodeData(product) {
    const format = document.getElementById('barcodeFormat')?.value || 'sku';
  
    switch(format) {
        case 'sku':
            return product.sku || `SKU-${product.productId}`;
        case 'id':
            return product.productId?.toString() || 'N/A';
        case 'combined':
            return `${product.sku || 'SKU'}-${product.productId || 'ID'}`;
        case 'custom':
            const customText = document.getElementById('customBarcodeText')?.value || '';
            return customText || product.sku || `SKU-${product.productId}`;
        default:
            return product.sku || `SKU-${product.productId}`;
    }
}

// Validate barcode data for specific barcode types - FIXED VERSION
function validateBarcodeData(barcodeData, barcodeType) {
    if (!barcodeData || barcodeData.trim() === '') {
        return { valid: false, error: 'Barcode data cannot be empty' };
    }
  
    const data = barcodeData.trim();
  
    // If using CODE128 (default), allow all characters
    if (barcodeType === 'CODE128') {
        return { valid: true };
    }
  
    // For numeric-only barcode types, we need to ensure data is numeric
    // But if it's not, we should use CODE128 instead
    const numericBarcodeTypes = ['EAN13', 'EAN8', 'UPC', 'ITF14', 'pharmacode', 'MSI'];
    if (numericBarcodeTypes.includes(barcodeType)) {
        if (!/^\d+$/.test(data)) {
            // Data contains non-numeric characters, so this barcode type won't work
            return { valid: false, error: `${barcodeType} requires numeric characters only` };
        }
    }
  
    // For CODE39, check if it contains valid characters
    if (barcodeType === 'CODE39') {
        if (!/^[A-Z0-9\-\.\ \$\/\+\%]+$/i.test(data)) {
            return { valid: false, error: 'CODE39 allows only alphanumeric characters and -.$/+%' };
        }
    }
  
    // Check specific length requirements for certain barcode types
    if (barcodeType === 'EAN13' && data.length !== 13) {
        return { valid: false, error: 'EAN-13 requires exactly 13 digits' };
    }
    if (barcodeType === 'EAN8' && data.length !== 8) {
        return { valid: false, error: 'EAN-8 requires exactly 8 digits' };
    }
    if (barcodeType === 'UPC' && data.length !== 12) {
        return { valid: false, error: 'UPC requires exactly 12 digits' };
    }
    if (barcodeType === 'ITF14' && data.length !== 14) {
        return { valid: false, error: 'ITF-14 requires exactly 14 digits' };
    }
  
    return { valid: true };
}

// Update barcode preview - FIXED VERSION
function updateBarcodePreview() {
    const preview = document.getElementById('barcodePreview');
    if (!preview || selectedProductsForBarcode.length === 0) {
        if (preview) {
            preview.innerHTML = '<p class="text-gray-500">Select products and configure settings to see preview</p>';
        }
        return;
    }
  
    const product = selectedProductsForBarcode[0]; // Preview first product
    const barcodeData = getBarcodeData(product);
    const includeInfo = document.getElementById('includeProductInfo')?.checked || false;
    const type = document.getElementById('barcodeType')?.value || 'CODE128';
  
    // Validate barcode data
    const validation = validateBarcodeData(barcodeData, type);
    if (!validation.valid) {
        preview.innerHTML = `
            <div class="text-red-500 text-center p-4">
                <i class="fas fa-exclamation-triangle text-2xl mb-2"></i>
                <p>Invalid barcode data for ${type}</p>
                <p class="text-xs mt-1">${validation.error}</p>
                <p class="text-sm mt-2">Try using CODE128 for alphanumeric data like SKUs</p>
            </div>
        `;
        return;
    }
  
    preview.innerHTML = '';
  
    // Generate Barcode
    const width = parseFloat(document.getElementById('barcodeWidth')?.value || 2);
    const height = parseFloat(document.getElementById('barcodeHeight')?.value || 40);
  
    // Create container for barcode
    const barcodeContainer = document.createElement('div');
    barcodeContainer.id = 'barcodeContainer';
    barcodeContainer.className = 'inline-block';
  
    // Create SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id = 'previewBarcode';
    svg.className = 'barcode-svg';
  
    barcodeContainer.appendChild(svg);
    preview.appendChild(barcodeContainer);
  
    try {
        // Check if JsBarcode is available
        if (typeof JsBarcode === 'undefined') {
            throw new Error('JsBarcode library not loaded. Make sure the script is included.');
        }
      
        // Generate barcode with appropriate options
        const options = {
            format: type,
            width: width,
            height: height,
            displayValue: true,
            fontOptions: 'bold',
            fontSize: 12,
            margin: 10,
            background: '#ffffff',
            lineColor: '#000000'
        };
      
        // Special options for specific barcode types
        if (type === 'CODE39') {
            options.displayValue = false; // CODE39 has built-in text
        }
      
        JsBarcode('#previewBarcode', barcodeData, options);
      
        // Add product info if enabled
        if (includeInfo) {
            const infoDiv = document.createElement('div');
            infoDiv.className = 'barcode-info mt-4';
            infoDiv.innerHTML = `
                <div class="barcode-product-name font-medium text-gray-800">${product.productName || 'N/A'}</div>
                <div class="barcode-details text-sm text-gray-600 mt-1">
                    SKU: ${product.sku || 'N/A'} |
                    Price: ₹${product.productPrice?.[0] || '0.00'} |
                    Exp: ${formatDate(product.expDate) || 'N/A'}
                </div>
            `;
            preview.appendChild(infoDiv);
        }
      
        // Add barcode type info
        const typeDiv = document.createElement('div');
        typeDiv.className = 'text-xs text-gray-500 mt-2';
        typeDiv.textContent = `Type: ${type} | Data: ${barcodeData}`;
        preview.appendChild(typeDiv);
      
    } catch (error) {
        console.error('Error generating barcode:', error);
        preview.innerHTML = `
            <div class="text-red-500 text-center p-4">
                <i class="fas fa-exclamation-triangle text-2xl mb-2"></i>
                <p>Error generating barcode preview</p>
                <p class="text-xs mt-1">${error.message}</p>
                <p class="text-xs mt-2">Try using CODE128 barcode type for alphanumeric data</p>
            </div>
        `;
    }
}

// FIXED: Generate all barcodes for printing
function generateBarcodes() {
    if (selectedProductsForBarcode.length === 0) {
        showSuccessPopup('No products selected', 'error');
        return;
    }
  
    // Check if JsBarcode is available
    if (typeof JsBarcode === 'undefined') {
        showSuccessPopup('JsBarcode library not loaded. Please refresh the page.', 'error');
        return;
    }
  
    const includeInfo = document.getElementById('includeProductInfo')?.checked || false;
    const type = 'CODE128'; // Always use CODE128 for alphanumeric SKUs
    const width = parseFloat(document.getElementById('barcodeWidth')?.value || 2);
    const height = parseFloat(document.getElementById('barcodeHeight')?.value || 40);
  
    console.log(`Generating barcodes for ${selectedProductsForBarcode.length} products`);
  
    // Create print window
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        showSuccessPopup('Please allow popups to generate barcodes', 'error');
        return;
    }
  
    // Write HTML structure
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Product Barcodes</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    padding: 0;
                }
                .header {
                    text-align: center;
                    margin-bottom: 20px;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #333;
                }
                .barcode-page {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 15px;
                }
                .barcode-item {
                    text-align: center;
                    padding: 10px;
                    border: 1px solid #ddd;
                    page-break-inside: avoid;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 150px;
                }
                .barcode-svg {
                    display: block;
                    margin: 0 auto;
                    max-width: 100%;
                }
                .barcode-info {
                    margin-top: 8px;
                    font-size: 11px;
                }
                .barcode-product-name {
                    font-weight: bold;
                    margin-bottom: 2px;
                }
                .barcode-details {
                    font-size: 9px;
                    color: #666;
                }
                @media print {
                    .barcode-item { border: none; }
                    body { margin: 10mm; }
                }
                @page {
                    size: A4;
                    margin: 15mm;
                }
            </style>
            <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
        </head>
        <body>
            <div class="header">
                <h2>Product Barcodes (${selectedProductsForBarcode.length} items)</h2>
                <p>Generated on ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
                <p>Barcode Type: CODE128</p>
            </div>
            <div class="barcode-page">
    `);
  
    // Generate barcode for each product
    selectedProductsForBarcode.forEach((product, index) => {
        const barcodeData = getBarcodeData(product);
        const itemId = `barcode-${index}`;
      
        printWindow.document.write(`
            <div class="barcode-item">
                <svg id="${itemId}" class="barcode-svg"></svg>
                ${includeInfo ? `
                    <div class="barcode-info">
                        <div class="barcode-product-name">${(product.productName || 'N/A').substring(0, 30)}${(product.productName || '').length > 30 ? '...' : ''}</div>
                        <div class="barcode-details">
                            SKU: ${product.sku || 'N/A'} |
                            Price: ₹${product.productPrice?.[0] || '0.00'} |
                            Exp: ${formatDate(product.expDate) || 'N/A'}
                        </div>
                    </div>
                ` : ''}
                <div style="font-size: 10px; color: #888; margin-top: 5px;">${barcodeData}</div>
            </div>
        `);
    });
  
    printWindow.document.write(`
            </div>
            <script>
                // Generate barcodes after page loads
                window.onload = function() {
    `);
  
    // Generate barcodes in the print window
    selectedProductsForBarcode.forEach((product, index) => {
        const barcodeData = getBarcodeData(product);
      
        // Escape single quotes in the barcode data
        const escapedData = barcodeData.replace(/'/g, "\\'");
      
        printWindow.document.write(`
                    try {
                        JsBarcode('#barcode-${index}', '${escapedData}', {
                            format: 'CODE128',
                            width: ${width},
                            height: ${height},
                            displayValue: true,
                            fontSize: 10,
                            margin: 5,
                            background: '#ffffff',
                            lineColor: '#000000'
                        });
                    } catch(e) {
                        console.error('Error generating barcode ${index}:', e);
                        document.getElementById('barcode-${index}').innerHTML = '<text x="10" y="20" style="font-size: 12px;">Error: ' + e.message + '</text>';
                    }
        `);
    });
  
    printWindow.document.write(`
                    // Auto-print after 1 second
                    setTimeout(() => {
                        window.print();
                    }, 1000);
                }
            </script>
        </body>
        </html>
    `);
  
    printWindow.document.close();
    showSuccessPopup(`Generating ${selectedProductsForBarcode.length} barcodes in new window...`, 'info');
}

function downloadBarcodes() {
    if (selectedProductsForBarcode.length === 0) {
        showSuccessPopup('No products selected', 'error');
        return;
    }
  
    // FIXED: Correct way to get jsPDF
    const jsPDF = window.jspdf?.jsPDF || window.jsPDF;
   
    if (!jsPDF) {
        showSuccessPopup('PDF library not loaded. Using print instead...', 'info');
        setTimeout(() => generateBarcodes(), 500);
        return;
    }
  
    if (typeof html2canvas === 'undefined') {
        showSuccessPopup('Canvas library not loaded. Using print instead...', 'info');
        setTimeout(() => generateBarcodes(), 500);
        return;
    }
  
    const includeInfo = document.getElementById('includeProductInfo')?.checked || false;
    const type = 'CODE128'; // Always use CODE128
    const width = parseFloat(document.getElementById('barcodeWidth')?.value || 2);
    const height = parseFloat(document.getElementById('barcodeHeight')?.value || 40);
  
    // Show loading message
    showSuccessPopup('Generating PDF... Please wait.', 'info');
  
    // Create a temporary container for PDF generation
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '0';
    tempContainer.style.width = '210mm'; // A4 width
    tempContainer.style.backgroundColor = 'white';
    tempContainer.style.padding = '20px';
    tempContainer.style.fontFamily = 'Arial, sans-serif';
  
    // Add header
    const header = document.createElement('div');
    header.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #333; padding-bottom: 10px;">
            <h2 style="margin: 0; color: #333;">Product Barcodes</h2>
            <p style="margin: 5px 0; color: #666;">Generated on ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
            <p style="margin: 5px 0; color: #666;">Total: ${selectedProductsForBarcode.length} products</p>
            <p style="margin: 5px 0; color: #666;">Barcode Type: CODE128</p>
        </div>
    `;
    tempContainer.appendChild(header);
  
    // Create barcode container
    const barcodeContainer = document.createElement('div');
    barcodeContainer.style.display = 'grid';
    barcodeContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    barcodeContainer.style.gap = '15px';
    barcodeContainer.style.marginTop = '20px';
  
    // Generate barcodes in temp container
    selectedProductsForBarcode.forEach((product, index) => {
        const barcodeData = getBarcodeData(product);
      
        const itemDiv = document.createElement('div');
        itemDiv.style.border = '1px solid #ddd';
        itemDiv.style.padding = '10px';
        itemDiv.style.textAlign = 'center';
        itemDiv.style.display = 'flex';
        itemDiv.style.flexDirection = 'column';
        itemDiv.style.alignItems = 'center';
        itemDiv.style.justifyContent = 'center';
        itemDiv.style.minHeight = '120px';
      
        // Create SVG container for barcode
        const svgContainer = document.createElement('div');
        svgContainer.id = `temp-barcode-${index}`;
        svgContainer.style.marginBottom = '8px';
        itemDiv.appendChild(svgContainer);
      
        // Add product info
        if (includeInfo) {
            const infoDiv = document.createElement('div');
            infoDiv.style.fontSize = '10px';
            infoDiv.innerHTML = `
                <div style="font-weight: bold; margin-bottom: 2px;">${(product.productName || 'N/A').substring(0, 25)}${(product.productName || '').length > 25 ? '...' : ''}</div>
                <div style="color: #666; font-size: 8px;">
                    SKU: ${product.sku || 'N/A'} |
                    Price: ₹${product.productPrice?.[0] || '0.00'}
                </div>
            `;
            itemDiv.appendChild(infoDiv);
        }
      
        // Add barcode data
        const dataDiv = document.createElement('div');
        dataDiv.style.fontSize = '9px';
        dataDiv.style.color = '#888';
        dataDiv.style.marginTop = '5px';
        dataDiv.textContent = barcodeData;
        itemDiv.appendChild(dataDiv);
      
        barcodeContainer.appendChild(itemDiv);
    });
  
    tempContainer.appendChild(barcodeContainer);
    document.body.appendChild(tempContainer);
  
    // Generate barcodes using JsBarcode
    setTimeout(() => {
        selectedProductsForBarcode.forEach((product, index) => {
            const barcodeData = getBarcodeData(product);
          
            try {
                // Create SVG element
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.id = `svg-barcode-${index}`;
                svg.style.width = '100%';
                svg.style.height = '40px';
              
                document.getElementById(`temp-barcode-${index}`).appendChild(svg);
              
                // Generate barcode - ALWAYS USE CODE128 FOR PDF
                JsBarcode(`#svg-barcode-${index}`, barcodeData, {
                    format: 'CODE128',
                    width: width,
                    height: height,
                    displayValue: true,
                    fontSize: 8,
                    margin: 2,
                    background: '#ffffff',
                    lineColor: '#000000'
                });
            } catch (error) {
                console.error('Error generating barcode for PDF:', error);
                const container = document.getElementById(`temp-barcode-${index}`);
                if (container) {
                    container.innerHTML = `<div style="color: #666; font-size: 10px;">SKU: ${product.sku || 'N/A'}</div>`;
                }
            }
        });
      
        // Convert to PDF after barcodes are generated
        setTimeout(() => {
            try {
                // Use html2canvas to capture the content
                html2canvas(tempContainer, {
                    scale: 2,
                    useCORS: true,
                    logging: false,
                    backgroundColor: '#ffffff'
                }).then(canvas => {
                    // Create PDF using jsPDF
                    const pdf = new jsPDF('p', 'mm', 'a4');
                    const imgData = canvas.toDataURL('image/png');
                    const imgWidth = 210; // A4 width in mm
                    const pageHeight = 295; // A4 height in mm
                    const imgHeight = (canvas.height * imgWidth) / canvas.width;
                  
                    let heightLeft = imgHeight;
                    let position = 0;
                  
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                  
                    // Add additional pages if needed
                    while (heightLeft >= 0) {
                        position = heightLeft - imgHeight;
                        pdf.addPage();
                        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                        heightLeft -= pageHeight;
                    }
                  
                    // Save PDF
                    const fileName = `product_barcodes_${new Date().toISOString().split('T')[0]}.pdf`;
                    pdf.save(fileName);
                  
                    // Clean up
                    document.body.removeChild(tempContainer);
                  
                    showSuccessPopup('PDF downloaded successfully!', 'success');
                }).catch(error => {
                    console.error('Error generating PDF:', error);
                    document.body.removeChild(tempContainer);
                    showSuccessPopup('Error generating PDF. Please use Print instead.', 'error');
                });
            } catch (error) {
                console.error('PDF generation error:', error);
                document.body.removeChild(tempContainer);
                showSuccessPopup('Error generating PDF: ' + error.message, 'error');
            }
        }, 1000); // Wait for barcodes to render
    }, 100);
}

// FIXED: Generate and Print wrapper
function generateAndPrint() {
    if (selectedProductsForBarcode.length === 0) {
        showSuccessPopup('No products selected', 'error');
        return;
    }
  
    // Just call generateBarcodes which handles printing
    generateBarcodes();
}

// ============================================
// EXPORT FUNCTIONS (Fixed Excel/CSV Export) - unchanged
// ============================================
function exportToExcel(format = 'csv') {
    try {
        // FIXED: Use allProducts to export ALL data, not just filtered
        const products = allProducts || [];
      
        if (products.length === 0) {
            showSuccessPopup('No data to export', 'error');
            return;
        }
      
        console.log(`Exporting ${products.length} products in ${format} format`);
      
        // Prepare data based on format
        if (format === 'csv' || format === 'detailed') {
            // CSV Export
            let csvContent = '';
          
            // CSV Header
            const headers = [
                'ID', 'SKU', 'Product Name', 'Category', 'Subcategory', 'Brand',
                'Quantity', 'Unit', 'Price (₹)', 'Old Price (₹)', 'Rating',
                'Batch No', 'Manufacturing Date', 'Expiry Date', 'Status',
                'Verification Status', 'Prescription Required', 'Description'
            ];
          
            if (format === 'detailed') {
                headers.push('Benefits', 'Ingredients', 'Sizes', 'Created At');
            }
          
            csvContent += headers.join(',') + '\n';
          
            // CSV Rows
            products.forEach(product => {
                const row = [
                    product.productId || '',
                    product.sku || '',
                    `"${(product.productName || '').replace(/"/g, '""')}"`,
                    product.productCategory || '',
                    product.productSubCategory || '',
                    product.brandName || '',
                    product.productQuantity || 0,
                    product.unit || '',
                    product.productPrice && product.productPrice.length > 0 ? product.productPrice[0] : '',
                    product.productOldPrice && product.productOldPrice.length > 0 ? product.productOldPrice[0] : '',
                    product.rating || 0,
                    product.batchNo || '',
                    formatDateForExcel(product.mfgDate),
                    formatDateForExcel(product.expDate),
                    product.productStatus || '',
                    product.approved === true ? 'APPROVED' : product.approved === false ? 'REJECTED' : 'PENDING',
                    product.prescriptionRequired ? 'Yes' : 'No',
                    `"${(product.productDescription || '').replace(/"/g, '""')}"`
                ];
              
                if (format === 'detailed') {
                    row.push(
                        `"${(product.benefitsList || []).join('; ').replace(/"/g, '""')}"`,
                        `"${(product.ingredientsList || []).join('; ').replace(/"/g, '""')}"`,
                        `"${(product.productSizes || []).join('; ').replace(/"/g, '""')}"`,
                        formatDateForExcel(product.createdAt)
                    );
                }
              
                csvContent += row.join(',') + '\n';
            });
          
            // Create and download file
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
          
            const fileName = `products_export_${format}_${new Date().toISOString().split('T')[0]}.csv`;
          
            link.setAttribute('href', url);
            link.setAttribute('download', fileName);
            link.style.visibility = 'hidden';
          
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          
            // Clean up the URL
            setTimeout(() => URL.revokeObjectURL(url), 100);
          
            showSuccessPopup(`Exported ${products.length} products as ${format.toUpperCase()} successfully!`);
          
        } else if (format === 'excel') {
            // Excel Export using SheetJS
            if (typeof XLSX === 'undefined') {
                console.warn('SheetJS library not loaded, using CSV instead');
                showSuccessPopup('Excel library not loaded. Using CSV instead...', 'info');
                setTimeout(() => exportToExcel('csv'), 500);
                return;
            }
          
            // Prepare worksheet data
            const wsData = [];
          
            // Add header row
            const headers = [
                'ID', 'SKU', 'Product Name', 'Category', 'Subcategory', 'Brand',
                'Quantity', 'Unit', 'Price (₹)', 'Old Price (₹)', 'Rating',
                'Batch No', 'Manufacturing Date', 'Expiry Date', 'Status',
                'Verification Status', 'Prescription Required'
            ];
            wsData.push(headers);
          
            // Add data rows
            products.forEach(product => {
                const row = [
                    product.productId || '',
                    product.sku || '',
                    product.productName || '',
                    product.productCategory || '',
                    product.productSubCategory || '',
                    product.brandName || '',
                    product.productQuantity || 0,
                    product.unit || '',
                    product.productPrice && product.productPrice.length > 0 ? product.productPrice[0] : '',
                    product.productOldPrice && product.productOldPrice.length > 0 ? product.productOldPrice[0] : '',
                    product.rating || 0,
                    product.batchNo || '',
                    formatDateForExcel(product.mfgDate),
                    formatDateForExcel(product.expDate),
                    product.productStatus || '',
                    product.approved === true ? 'APPROVED' : product.approved === false ? 'REJECTED' : 'PENDING',
                    product.prescriptionRequired ? 'Yes' : 'No'
                ];
                wsData.push(row);
            });
          
            // Create worksheet
            const ws = XLSX.utils.aoa_to_sheet(wsData);
          
            // Set column widths
            const wscols = [
                { wch: 8 }, // ID
                { wch: 15 }, // SKU
                { wch: 30 }, // Product Name
                { wch: 25 }, // Category
                { wch: 20 }, // Subcategory
                { wch: 20 }, // Brand
                { wch: 10 }, // Quantity
                { wch: 10 }, // Unit
                { wch: 12 }, // Price
                { wch: 12 }, // Old Price
                { wch: 8 }, // Rating
                { wch: 15 }, // Batch No
                { wch: 15 }, // Mfg Date
                { wch: 15 }, // Expiry Date
                { wch: 12 }, // Status
                { wch: 15 }, // Verification
                { wch: 18 } // Prescription
            ];
            ws['!cols'] = wscols;
          
            // Create workbook
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Products');
          
            // Generate Excel file
            const fileName = `products_export_${new Date().toISOString().split('T')[0]}.xlsx`;
            XLSX.writeFile(wb, fileName);
          
            showSuccessPopup(`Exported ${products.length} products as Excel successfully!`);
        }
      
    } catch (error) {
        console.error('Export error:', error);
        showSuccessPopup('Error exporting data: ' + error.message, 'error');
      
        // Fallback to CSV if Excel fails
        if (format === 'excel') {
            showSuccessPopup('Excel export failed, trying CSV instead...', 'info');
            setTimeout(() => exportToExcel('csv'), 1000);
        }
    }
}

function formatDateForExcel(dateString) {
    if (!dateString) return '';
    try {
        if (dateString.includes('T')) {
            dateString = dateString.split('T')[0];
        }
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
      
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    } catch (error) {
        return dateString;
    }
}

// ============================================
// HELPER FUNCTIONS
// ============================================
async function deleteProduct(product) {
    if (confirm(`Are you sure you want to delete "${product.productName}"?`)) {
        try {
            console.log(`=== DELETE REQUEST ===`);
            console.log(`Product: ${product.productName} (ID: ${product.productId})`);
          
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 300));
          
            // Find product index
            const productIndex = DUMMY_PRODUCTS.findIndex(p => p.productId == product.productId);
          
            if (productIndex === -1) {
                throw new Error(`Product with ID ${product.productId} not found`);
            }
          
            // Remove from dummy data
            DUMMY_PRODUCTS.splice(productIndex, 1);

            // ───────────────────────────────────────────────────────
            // NEW: Save to localStorage after deletion
            saveProductsToStorage();
            // ───────────────────────────────────────────────────────
          
            console.log('Delete successful');
            showSuccessPopup('Product deleted successfully!');
          
            // Refresh the table
            await loadProducts();
            await updateStats();
          
        } catch (error) {
            console.error('Delete error:', error);
            showSuccessPopup('Error deleting product. Check console.', 'error');
        }
    }
}

function showSuccessPopup(message, type = 'success') {
    const successPopup = document.getElementById('successPopup');
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = message;
    const icon = document.getElementById('popupIcon');
    icon.className = type === 'success' ? 'fas fa-check-circle' :
                     type === 'error' ? 'fas fa-exclamation-circle' :
                     'fas fa-info-circle';
    icon.style.color = type === 'success' ? '#10b981' :
                       type === 'error' ? '#dc2626' :
                       '#3b82f6';
    successPopup.style.display = 'flex';
    setTimeout(() => {
        successPopup.style.display = 'none';
    }, 3000);
}

// ============================================
// INITIALIZATION
// ============================================
// Initialize the page
document.addEventListener('DOMContentLoaded', async function() {
    // Initialize sidebar
    initializeSidebar();
  
    // Handle window resize for responsive sidebar
    window.addEventListener('resize', handleResponsiveSidebar);
  
    // Setup event listeners
    setupEventListeners();
  
    // Initialize barcode functionality
    initializeBarcodeFunctionality();
  
    // Add global export function
    window.exportToExcel = exportToExcel;
  
    // Add global barcode functions
    window.openBarcodeModalForSelected = openBarcodeModalForSelected;
    window.openBarcodeModalForAll = openBarcodeModalForAll;
    window.generateSingleBarcode = generateSingleBarcode;
    window.generateBarcodes = generateBarcodes;
    window.generateAndPrint = generateAndPrint;
    window.downloadBarcodes = downloadBarcodes;
  
    try {
        await initializeCategories();
        await loadProducts();
        await updateStats();
    } catch (error) {
        console.error('Error initializing page:', error);
        showSuccessPopup('Error loading data. Please refresh the page.', 'error');
    }
});