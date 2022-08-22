package com.example.ecomm.nav_fragments

import android.graphics.Color
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.ecomm.R
import com.github.dhaval2404.imagepicker.ImagePicker
import com.google.android.material.textfield.TextInputLayout
import kotlinx.android.synthetic.main.fragment_account.view.*

class AccountFragment : Fragment() {

    var imagePicker: ImagePicker?=null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val bottomSheetFragment = BottomSheetFragment()
        val view = inflater.inflate(R.layout.fragment_account, container, false)
//        view.profileButton.setOnClickListener {
//            bottomSheetFragment.show(requireActivity().supportFragmentManager, "BottomSheetDialog")
//        }
        view.profileButton.setOnClickListener {
            bottomSheetFragment.show(requireActivity().supportFragmentManager, "BottomSheetDialog")
        }

        view.saveButton.setOnClickListener {

            if(view.saveButton.text == "Save"){
                view.saveButton.text = "Edit"

                view.name.isClickable = false
                view.name.isFocusable = false
                view.name.isCursorVisible = false
                view.name.isFocusableInTouchMode = false

                view.email.isClickable = false
                view.email.isFocusable = false
                view.email.isCursorVisible = false
                view.email.isFocusableInTouchMode = false

                view.email.isClickable = false
                view.email.isFocusable = false
                view.email.isCursorVisible = false
                view.email.isFocusableInTouchMode = false

//            view.password.setBackgroundColor(R.color.white)
                view.password.setBackgroundColor((Color.parseColor("#ffffff")))
                view.passwordInput.boxBackgroundMode = TextInputLayout.BOX_BACKGROUND_OUTLINE
                view.name.setBackgroundColor((Color.parseColor("#ffffff")))
                view.nameInput.boxBackgroundMode = TextInputLayout.BOX_BACKGROUND_OUTLINE
                view.email.setBackgroundColor((Color.parseColor("#ffffff")))
                view.emailInput.boxBackgroundMode = TextInputLayout.BOX_BACKGROUND_OUTLINE
            }
            else{
                view.saveButton.text = "Save"

                view.name.isClickable = true
                view.name.isFocusable = true
                view.name.isCursorVisible = true
                view.name.isFocusableInTouchMode = true

                view.email.isClickable = true
                view.email.isFocusable = true
                view.email.isCursorVisible = true
                view.email.isFocusableInTouchMode = true

                view.email.isClickable = true
                view.email.isFocusable = true
                view.email.isCursorVisible = true
                view.email.isFocusableInTouchMode = true

//            view.password.setBackgroundColor(R.color.white)
                view.password.setBackgroundColor((Color.parseColor("#BDC3C7")))
                view.passwordInput.boxBackgroundMode = TextInputLayout.BOX_BACKGROUND_FILLED
                view.name.setBackgroundColor((Color.parseColor("#BDC3C7")))
                view.nameInput.boxBackgroundMode = TextInputLayout.BOX_BACKGROUND_FILLED
                view.email.setBackgroundColor((Color.parseColor("#BDC3C7")))
                view.emailInput.boxBackgroundMode = TextInputLayout.BOX_BACKGROUND_FILLED
            }
        }

        return view
    }
}